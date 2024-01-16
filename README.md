# LEARNING TYPESCRIPT WITH REACT

- learned about basics of typescript
- learned about using type, interface
- declaring Functional components with props in typescript
- passing state and props to children components
- using useState with typescript
- learned about declaring function and passing it as a prop using typescript
- started learning about using useContext and useReducer in react typescript
- implemented context and reducer in todo app with typescript
- implemented dispatch , action types, provider parent components in typescript
- implemented filter tab in the with functionality
- dispatch action types for filter functionality in the app
- learning about implementing dark mode using tailwind
- implemented dark mode without using dark: tailwindcss property but by changing css-variable inside the :root[date-theme] when the toggle button is clicked

```
  // TODO APP PLANNING
  // -- INPUT TODO
  // -- LIST OF TODOS
  //   --- SINGLE TODO NAME AND DELETE BUTTON
```

checking theme

- bg-light : light-neutral-very-light-gray
- bg-text : light-neutral-very-dark-grayish-blue
- footer-text-light: light-neutral-dark-grayish-blue
- todo-text: light-neutral-very-dark-grayish-blue
- todo-line-through:light-neutral-light-grayish-blue
- todo:

  - border-color:light-neutral-very-light-grayish-blue
  - bg-color:light-neutral-very-light-gray

- bg-dark: dark-neutral-very-dark-blue
- bg-text: dark-neutral-light-grayish-blue
- footer-text-dark: dark-neutral-very-dark-grayish-blue-1
- todo-text-dark: dark-neutral-light-grayish-blue
- todo-line-through: dark-neutral-very-dark-grayish-blue-1
- todo:
  - border-color:dark-neutral-very-dark-grayish-blue-1
  - bg-color:dark-neutral-very-dark-desat-blue

```
// TypeScript will automatically infer the type of variable during initialization of value for it

let name1 = "Nidhin sankar"

// name1 = true
name1 = "Ashwin kumar"
console.log(name1)

// ARRAYS
let names:string[] = ["john", "jane", "tom"];
names.push("pushpa")
let stringAndNumber:(string | number | boolean)[] = [2,"nidhin","prakash",false]
console.log(stringAndNumber)

// OBJECTS
const user = {
    name:'nidhin',
    age:23
}

// user.age = "thirteeb"
user.age = 55
console.log(user)

// Function

let sayHi= () =>{
    console.log("hello world")  // function returing void
}

let returnStrinf =():string => {
    console.log("return string")
    return "hello worls" /// function returning
}


let multiple = (num: number) => {
    return num * 2 // function with number parameter type
}

let displayName = (first:string,second?:string) => {
    return "My name is "+first+" "+second; // function with optional parameter
}


// TYPE ALIASES

type UserType1 = {
    name:string,
    age:number,
    isAdmin:boolean
}

let objFunc = (user:UserType1) =>{
    console.log(user.name) // passing objects in function using my own user type
}

// FUNCTION SIGNATURE
// WE CAN CREATE OUR OWN FUNCTION TYPE
type myFuncType = (a:string,b:number) => void

let myOwnFunc:myFuncType = (first,second) =>{
    console.log(first + second)
    return "Iam returning"
}
```
