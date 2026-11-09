## TypeScript Type Hierarchy: Understanding any, unkown, and never

### Introduction 

TypeScript provides several special types that help developers hanlde different kinds of values. Among them any, unkown, and never play important roles in this type system. Although they may seem similar , they behave differently. Understanding their differences helps developers write safer and more reliable code 

### Detailed Body 
#### 1. The any type 
The any type disables TypeScript's type checking for a variable. It allows any value and operation without generating type errors. 

let value : any = 'hello' 
value = 100;
value.toUpperCase(); 

it provides flexibility but can introduce runtime errors 


#### 2. The unkown Type 
The unkown type can store any value , but unlike any,it requires type checking before performing operations. 

let value :unkown = "hello"';

let (typeof vaue === 'string') {
    console.log(vlaue.toUpperCase());
}

this make unkown safer because it prevents potentially unsafe operations. 

#### 3. The never type 
The never type represents that never occur . It commonly used for funtions that never return, such as functions that always throw errors. 

function throwError(message:string) :never {
    throw new Error(message);
}

#### 4. Type Hierarchy
In TypeSript, any and unkown can accept values of differenct types , while never represents bottom type and is assignable to every other type 

- any: allows unresticted operations .
- unkown: accepts any value but requires type checking.
- never: Represents impossible values. 

#### 5. Why is unkown prefere over any ? 
unkown is generally preferred because it maintains type safely. It forces  developers to check a value's type before using it, it reducing unexpected runtime error. 

### Conclusion 

Understandig any , unkown and never is essential for writing safe typeScript application. Although any offers flexibility , unkown provides better safety, while never represent impossible values. 