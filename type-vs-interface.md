# Type Aliases vs Interface in TypeScript: Core Difference

## 1. Introduction

TypeScript is a strongly type programming language that helps to write more safer, scalable JavaScript applications. One of its important features is the ability to define custom types using type aliases and interface.

Both help developers describe object structures, improve code readability, and maintain type safety. Although they look similar, they have some important differences.

## 2. Detailed Body

### i. Type Alias

A type alias allows developers to create custom names for different types, including objects, primitives, unions, and tuples.

`typescript
type User = {
    name: string;
    age: number;
};

type Status = 'success' | 'error';
`

### ii. Interface

An interface is mainly used to define the structure of objects. It describes the properties and methods an object must contain.

\```typescript
interface User {
    name: string;
    age: number;
}
\```

### iii. Core Differences

The main differences are:

- **Declaration Merging:** Interfaces support declaration merging, but type aliases do not.
- **Extending:** Interfaces use `extends`; on the other hand, type aliases use intersections.
- **Flexibility:** Type aliases support primitive types, unions, intersections, and tuples. Interfaces mainly describe object structures.

#### Example of Interface Extensions

\```typescript
interface Person {
    name: string;
}

interface Employee extends Person {
    salary: number;
}
\```

#### Example of Type Intersections

\```typescript
type Person = {
    name: string;
};

type Employee = Person & {
    salary: number;
};
\```

### iv. When to Choose Each?

Use interfaces when defining object structures, creating reusable contracts, or working with class implementations.

Use types when defining union types, tuples, primitives, or complex type expressions.

Both can be used together in the same project.

## 3. Conclusion

Both type aliases and interfaces are useful TypeScript features. Interfaces are ideal for object-oriented structures, while type aliases provide greater flexibility for complex types.
