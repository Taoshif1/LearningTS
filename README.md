# Learning TypeScript 🚀

[![Status: Active Learning](https://img.shields.io/badge/Status-Active%20Learning-brightgreen.svg?style=for-the-badge)](https://github.com/Taoshif1/LearningTS)
[![Author: Gazi Taoshif](https://img.shields.io/badge/Author-Gazi%20Taoshif-blue.svg?style=for-the-badge)](https://github.com/Taoshif1)

A hands-on TypeScript learning repository where I practice concepts with small examples, comments, and compiled JavaScript beside the TypeScript source.

## Why This Repository?

I use this repository to strengthen TypeScript fundamentals and understand the type system behind the applications I build. The focus is not only writing code that works, but understanding why TypeScript accepts or rejects it and how stronger types make real applications safer to maintain.

## Topics Covered

### TypeScript Basics
- Built-in types: `number`, `string`, `boolean`, `any`, `void`, `null`, `undefined`, `never`
- Arrays, objects, tuples and enums
- Type aliases and custom types
- Union types
- Literal types
- Intersection types
- `unknown` and `never`

### Functions
- Typed parameters and return types
- Function signatures
- Optional parameters
- Default parameters
- Rest parameters
- Function overloads

### Interfaces
- Creating and using interfaces
- Interface-based object typing
- Classes implementing interfaces
- Interface inheritance with `extends`

### Object-Oriented TypeScript
- Classes and constructors
- Inheritance
- Encapsulation
- Access modifiers: `public`, `private`, `protected`, `readonly`
- Getters and setters
- Abstract classes and methods
- Polymorphism

### Modules
- `export`
- Named imports
- Renamed imports
- Namespace imports with `import * as`

### DOM with TypeScript
- DOM element type assertions
- Typed form elements
- Typed events
- Working with form input values safely

### Type Narrowing
- `typeof` narrowing
- Truthiness narrowing
- `in` operator narrowing
- `instanceof` narrowing
- Equality narrowing
- Discriminated unions
- Custom type predicates
- Exhaustive `never` checking

### Generics
- Generic functions
- Multiple generic type parameters
- Generic arrays
- Generic classes
- Generic interfaces
- Generic constraints
- `keyof` with generics

### Type Operators
- `keyof`
- Indexed access types
- `typeof` in type positions
- `as const`
- `satisfies`

### Utility and Derived Types
- `Partial`
- `Required`
- `Pick`
- `Omit`
- `Readonly`
- `Record`
- Mapped types
- Conditional types

### Async TypeScript
- `Promise<T>`
- Typed `async` / `await`
- Typed API response examples
- Error handling with `unknown`

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
├── tsConfig/
├── src/
├── package.json
└── tsconfig.json
```

Each topic is intentionally kept small so I can focus on one TypeScript idea at a time. Many examples include the compiled `.js` file beside the `.ts` source so I can also observe how TypeScript is converted to JavaScript.

## Setup

```bash
git clone https://github.com/Taoshif1/LearningTS.git
cd LearningTS
npm install
```

TypeScript is included as a development dependency. Individual examples can be opened and tested separately while learning.

## Current Goal

This repository is an active fundamentals lab. I am revisiting TypeScript deliberately so that AI-assisted development does not replace my own understanding of the language, type system, debugging process, and engineering decisions.

## Author

**Gazi Taoshif**  
CSE, East West University  
Dhaka, Bangladesh

- [GitHub](https://github.com/Taoshif1)
- [LinkedIn](https://www.linkedin.com/in/taoshif1/)
- [Portfolio](https://webdevportfolio-three.vercel.app/)

Constructive feedback and suggestions are welcome.
