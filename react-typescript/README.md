# React + TypeScript Track

This folder applies TypeScript concepts inside React instead of keeping them as isolated language examples.

## Progress

- [x] Typed component props
- [x] Literal unions for constrained prop values
- [x] Optional props
- [x] Conditional rendering with typed values
- [ ] Discriminated unions for UI and async state
- [ ] Typed events and form handling
- [ ] `useState` with precise state models
- [ ] `useReducer` with typed actions
- [ ] `useRef` and DOM element types
- [ ] Context with safe defaults
- [ ] Generic reusable components
- [ ] Generic custom hooks
- [ ] API response and error modelling
- [ ] Type-safe component variants
- [ ] Advanced utility, conditional and inferred types in React

## Exercises

### 01 — Typed Props

[`01-typed-props/ProductCard.tsx`](./01-typed-props/ProductCard.tsx)

Covers:

- object types for props
- literal union types
- optional properties
- destructured typed props
- conditional rendering

### 02 — Discriminated Unions for UI State

[`02-discriminated-unions/README.md`](./02-discriminated-unions/README.md)

Current exercise. Model `idle`, `loading`, `success`, and `error` as valid states instead of combining loosely related booleans and optional fields.

## Goal

The goal is not to add TypeScript annotations everywhere. The goal is to model valid application states so invalid states are harder to represent in code.
