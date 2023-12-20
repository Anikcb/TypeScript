
let firstName = "Anik";
console.log(firstName);
firstName=firstName.toLowerCase();
console.log(firstName);

// Working with array
let arr = [1,3,5,7];
arr.pop();
console.log(arr);

// Set the type of a  vaiable
let text: string = "Hello";
console.log(text);

// We can also set a variable to be able to be a union type
let age: string | number;
age = 24;
age = '24';
console.log(age);

// Any type Data
let anyData: any[] = ["Abc", 1 , true];
console.log(anyData);

// Functio in Typescript 
function test(name : string): string {
    return name;
}
console.log(test(firstName));

// Function Signature
let test2: (name : string)  => void;
test2 = (name) => {
    console.log("Hello " + name);
}
test2("Anik");

// Type Aliases
type TestObject = {
    name: string
    id: string | number
};

const ob1: TestObject = {
    name: 'ABC',
    id: 1
};

const ob2: TestObject = {
    name: 'DEF',
    id: 2
};

const A = (test : TestObject) => {
    return "Hello " + test.name;
}

const B = (test : TestObject) => {
    return "Bye" + test.name;
}

console.log(A(ob2));

// Interface in Typescript
interface A{
    name: string;
}

interface A{
    Roll: number;
}

const C : A = {
    name: "XYZ",
    Roll: 12,
}
console.log(C.name + " " + C.Roll);

interface Point{
    name: string;
    Roll: number;
    printExample(): any; // declaring a fuction
}

class X implements Point{
    name="ABC";
    Roll=12132;
    constructor(){
        this.printExample();
    }
    printExample(): any{
        console.log("Hello from another class!!");
    }
}
let ob = new X();


// Generics
interface hasLength{
    length: number;
}
function logLength<T extends hasLength>(a: T){
    console.log(a.length);
    return A;
}
logLength("Hello");

// Enum
enum BookList{
    A,
    B,
    C,
    D,
}
console.log(BookList.D);

// Labmda Function
const names = ['AB', 'BC', 'CD', 'DE'];
names.forEach((i) => {
    console.log(i.toLowerCase());
});

// Working With Union Type
function printFunc(val: string | number){
    if(typeof val === "string"){
        console.log("Its a srting");
    }
    else{
        console.log("Its a number!!");
    }
}
printFunc("ABABDFABF");

// Literal Types
interface Options{
    length: number;
}

function configure(x: Options | "auto"){
    if(x == "auto"){

        console.log("Literal Tyes " + x);
    }
    else{
        console.log("Literal Type " + x.length);
    }
}
configure({length: 27});
configure("auto");
















// To run the file run "tsc test.ts -w" in one terminal
// and "node test" in another