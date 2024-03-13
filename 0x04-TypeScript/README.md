0x04. Typescript
JavaScript
-
read or watch: * TypeScript in 5 minutes * TypeScript documentation

WHAT YOU NEED TO KNOW?
Basic types in Typescript
Interfaces, Classes, and functions
How to work with the DOM and Typescript
Generic types
How to use namespaces
How to merge declarations
How to use an ambient Namespace to import an external library
Basic nominal typing with Typescript)
Introduction
This README covers fundamental concepts in
TypeScript such as:
* Interfaces
* Classes
* Functions
* DOM manipulation
* Generic types
* namespaces
* declaration merging
* ambient namespaces
* basic nominal typing.
Interfaces
Interfaces in TypeScript allow you to define the structure of objects. They provide a way to describe the shape of an object. Here's an example:

typescript

interface Person {
  name: string;
  age: number;
}

const person: Person = { name: "John", age: 30 };
^

Classes
Classes in TypeScript enable you to create blueprints for objects. They support inheritance, encapsulation, and abstraction.

Example:

class Animal {
  constructor(public name: string) {}
  
  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

const dog = new Animal("Rex");
dog.move(10);

^

Functions
Functions in TypeScript can have explicit parameter types and return types. They can also have default and optional parameters.

Example:

function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet("World");

^

Working with the DOM and TypeScript
TypeScript provides type safety when working with the DOM.

Example:

const element = document.getElementById("myElement") as HTMLInputElement;
element.value = "Hello TypeScript!";

^

Generic Types
Generic types in TypeScript enable you to create reusable components that can work with a variety of data types.

Example:

function identity<T>(arg: T): T {
  return arg;
}

^

Namespaces
Namespaces in TypeScript provide a way to logically group related code.

Example:

namespace MyNamespace {
  export interface MyInterface {
    // Interface members
  }

  export function myFunction() {
    // Function implementation
  }
}

^

Merging Declarations
TypeScript allows you to merge declarations from multiple sources into a single definition.

Example:

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = { name: "John", age: 30 };

^

Ambient Namespaces
Ambient namespaces allow you to import external libraries with type definitions without actually importing the code at runtime.

Example:

declare namespace MyLibrary {
  // External library interface
}

^

Basic Nominal Typing
TypeScript supports nominal typing through the brand pattern.

Example:

type Brand<T, U> = T & { __brand: U };
type Email = Brand<string, "Email">;

function sendEmail(email: Email) {
  // Function implementation
}

TypeScript documentation
