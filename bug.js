```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, including the initial render
    console.log('Effect running!');
    return () => {
      // Cleanup function (runs before the next effect or component unmount)
      console.log('Cleanup running!');
    };
  }, []); // Empty dependency array means this effect runs only once

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```