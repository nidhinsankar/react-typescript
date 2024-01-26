# Todo App

An Todo app built with react and typescript. I built this project as a side project for the purpose of starting to learn typescript in react and taking design inspiration from Frontend Mentor.I also made the app responsive and added dark theme toggle functionality.

```
  // TODO APP PLANNING
  // -- INPUT TODO
  // -- LIST OF TODOS
  //   --- SINGLE TODO NAME AND DELETE BUTTON
```

## TECHNOLGIES

- Vite
- React
- Typescript
- TailwindCSS

## FEATURES

- In this app, you can create, delete,view todos
- Mark todo as completed, filter functionality to view todos based on the status as All, Active, Completed
- Toggle between dark and light mode

## WHAT I LEARNED

During this project, I've picked up important skills ,test out some ideas and started to use typescript in react .I started with small todo app to get start using typescript in react project

### LEARNING TYPESCRIPT WITH REACT

In this project, I created a react todo app with typescript.

- learned about basics of typescript
- learned about using type, interface
- declaring Functional components with props in typescript
- passing state and props to children components
- using useState with typescript
- learned about declaring function and passing it as a prop using typescript
- learned about using useContext and useReducer in react typescript, dispatch , action types, provider parent components in typescript

### DARK MODE TOGGLE USING TAILWINDCSS

- learning about implementing dark mode using tailwind
- implemented dark mode without using dark: tailwindcss property but by changing css-variable inside the :root[date-theme] when the toggle button is clicked
- Using :root property we can define our colors as a variables in our css file
- using :root[date-theme="any-theme-name"] using this property we can any number of multiple theme for multiple prefrecences of the user .But i only created dark-mode theme using this property
- We can toggle between light and dark theme using javascript evetListener and attach a attribue of `data-theme="dark"` inthe document.documentElement.setAttribute property.

```css
:root {
  --bg-full: 0deg 0% 98%;
  --full-text: 235deg 19% 35%;
  --footer-text: 236deg 9% 61%;
  --todo-text: 235deg 19% 35%;
  --todo-line-through: 233deg 11% 84%;
  --todo-bg: 0deg 0% 98%;
  --todo-border: 236deg 33% 92%;
}
:root[data-theme="dark"] {
  --bg-full: 235deg 21% 11%;
  --full-text: 234deg 39% 85%;
  --footer-text: 233deg 14% 35%;
  --todo-text: 234deg 39% 85%;
  --todo-line-through: 233deg 14% 35%;
  --todo-bg: 235deg 24% 19%;
  --todo-border: 233deg 14% 35%;
}
```

```javascript
useEffect(() => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    dispatch({ type: "INITIAL_THEME", payload: "dark" });
  } else {
    dispatch({ type: "INITIAL_THEME", payload: "light" });
  }
}, []);

const handleThemeSwitch = () => {
  dispatch({ type: "TOGGLE_THEME" });
};

useEffect(() => {
  if (state?.theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "");
  }
}, [state.theme]);
```

### TARGETING MOBILE AND PC SCREEN DEVICE

- In this part, I learned about using javascript for finding out whether the user is using a mobile or PC and changing the background image based on the screen size
- I attached the function to `resize` eventListener to the window object

```javascript
const handleResize = () => {
  if (window.innerWidth < 680) {
    setIsMobile(true);
  } else {
    setIsMobile(false);
  }
};

useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
```

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
