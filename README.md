# useEffect Runs Multiple Times with Empty Dependency Array in React 19

This repository demonstrates a bug where `useEffect` in React 19 runs multiple times even with an empty dependency array. This unexpected behavior can lead to performance issues and incorrect application state. The solution involves ensuring that the dependencies are correctly managed and avoiding unnecessary re-renders.

## Bug Description

The `useEffect` hook in React is designed to perform side effects based on changes in its dependencies. When provided an empty dependency array (`[]`), it's expected to run only once during the component's initial mount. However, this example shows `useEffect` running multiple times in React 19 even with the empty dependency array.

## Bug Reproduction

1. Clone this repository
2. Run `npm install`
3. Run `npm start`
4. Observe the console output. You'll see that the effect runs and cleans up multiple times.

## Solution

The solution is to identify and address any potential state updates or other factors within the component that trigger re-renders. In some cases, re-rendering can be caused by unexpected changes, particularly when dealing with complex state management. By eliminating these triggers, the `useEffect` hook will behave as expected.