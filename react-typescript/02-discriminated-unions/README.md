# 02 — Discriminated Unions for UI State

A common frontend mistake is modelling related state with independent booleans and optional values.

```ts
type BadState<T> = {
  loading: boolean;
  data?: T;
  error?: string;
};
```

This permits impossible or contradictory states, such as `loading: true` while both `data` and `error` exist.

A discriminated union makes each valid state explicit:

```ts
type RequestState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };
```

The `status` property is the discriminator. Once TypeScript sees a particular `status`, it narrows the object to the matching member of the union.

## Exercise

Create `UserLoader.tsx`.

Requirements:

1. Define a `User` type with `id`, `name`, and `email`.
2. Define a generic `RequestState<T>` discriminated union.
3. Make `UserLoader` receive `state: RequestState<User>` as a prop.
4. Render a different UI for `idle`, `loading`, `success`, and `error`.
5. Use a `switch` statement.
6. Add exhaustive checking with `never` in the default case.

Do not use `any`.

## Why This Matters

The objective is to make invalid UI states impossible to represent instead of relying on runtime conventions between several loosely related variables.
