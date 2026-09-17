# Learning TypeScript 🚀

[![Status: Active Learning](https://img.shields.io/badge/Status-Active%20Learning-brightgreen.svg?style=for-the-badge)](https://github.com/Taoshif1/LearningTS)
[![Author: Gazi Taoshif](https://img.shields.io/badge/Author-Gazi%20Taoshif-blue.svg?style=for-the-badge)](https://github.com/Taoshif1)

A hands-on TypeScript learning repository where I study the language, test concepts in small examples, and gradually apply them to real React/frontend development.

This repository is intentionally a learning journal. Older examples remain visible because they show the progression from TypeScript fundamentals toward stronger application-level type design.

## Current Stage

**Fundamentals covered → practical and advanced TypeScript in React.**

I am now focusing less on basic annotations and more on modelling real application state, reusable components, API data, errors, hooks, and state management safely.

Current track: [`react-typescript/`](./react-typescript)

## Topics Covered

### TypeScript Fundamentals

- Built-in types: `number`, `string`, `boolean`, `any`, `void`, `null`, `undefined`, `never`
- Arrays, objects, tuples and enums
- Type aliases and custom types
- Union, literal and intersection types
- `unknown` and `never`

### Functions

- Typed parameters and return types
- Function signatures
- Optional, default and rest parameters
- Function overloads

### Interfaces and OOP

- Interfaces and interface inheritance
- Classes implementing interfaces
- Classes and constructors
- Inheritance and polymorphism
- Encapsulation
- `public`, `private`, `protected`, `readonly`
- Getters and setters
- Abstract classes and methods

### Modules and DOM

- `export` and imports
- Named, renamed and namespace imports
- DOM element assertions
- Typed form elements and events
- Safe form input access

### Type Narrowing

- `typeof`
- truthiness
- `in`
- `instanceof`
- equality narrowing
- discriminated unions
- custom type predicates
- exhaustive `never` checking

### Generics

- Generic functions
- Multiple type parameters
- Generic arrays, classes and interfaces
- Generic constraints
- `keyof` with generics

### Type Operators and Derived Types

- `keyof`
- indexed access types
- `typeof` in type positions
- `as const`
- `satisfies`
- `Partial`, `Required`, `Pick`, `Omit`, `Readonly`, `Record`
- mapped types
- conditional types

### Async TypeScript

- `Promise<T>`
- typed `async` / `await`
- typed API response examples
- error handling with `unknown`

### React + TypeScript

- typed component props
- literal unions for constrained props
- optional props
- typed conditional rendering

See the live checklist in [`react-typescript/README.md`](./react-typescript/README.md).

## Repository Structure

```text
LearningTS/
├── built-in-type/
├── user-defined-datatype/
├── function/
├── class-typeScript/
├── full-OOP/
├── interface/
├── narrowing/
├── generics/
├── type-operator/
├── utility-types/
├── mapped-conditional-type/
├── async-typeScript/
├── module-demo/
├── DOM/
├── react-typescript/
│   ├── README.md
│   └── 01-typed-props/
├── tsConfig/
├── src/
├── package.json
└── tsconfig.json
```

Many early examples include compiled `.js` files beside their `.ts` source. This was intentional while learning how TypeScript is transformed into JavaScript.

## Learning Roadmap

### Phase 1 — Core TypeScript ✅

Language fundamentals, functions, interfaces, OOP, narrowing, generics, utility types, modules, DOM and async TypeScript.

### Phase 2 — Practical React + TypeScript 🟡

- precise state modelling
- discriminated unions in UI state
- typed React events and forms
- `useState`, `useReducer`, `useRef`, Context
- generic components and custom hooks
- API response and error modelling
- advanced inference and reusable type patterns

### Phase 3 — Redux Toolkit + TypeScript

- store architecture
- typed slices and reducers
- typed hooks and selectors
- async thunks
- RTK Query
- server state vs client state

### Phase 4 — Frontend Engineering

- testing
- accessibility
- performance
- browser and HTTP fundamentals
- authentication patterns
- frontend architecture

### Phase 5 — Backend and Go

After strengthening frontend engineering fundamentals, the next language track will cover Go from syntax through APIs, databases and concurrency.

## Setup

```bash
git clone https://github.com/Taoshif1/LearningTS.git
cd LearningTS
npm install
```

The repository contains small independent learning examples, so not every folder is intended to run as one application.

## Learning Principle

The objective is not to add type annotations everywhere. It is to understand the type system well enough to model valid states, catch invalid assumptions earlier, and make better engineering decisions without depending blindly on generated code.

## Author

**Gazi Taoshif**  
CSE, East West University

- [GitHub](https://github.com/Taoshif1)
- [LinkedIn](https://www.linkedin.com/in/taoshif1/)

Constructive feedback and suggestions are welcome.
