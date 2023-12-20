var firstName = "Anik";
console.log(firstName);
firstName = firstName.toLowerCase();
console.log(firstName);
// Working with array
var arr = [1, 3, 5, 7];
arr.pop();
console.log(arr);
// Set the type of a  vaiable
var text = "Hello";
console.log(text);
// We can also set a variable to be able to be a union type
var age;
age = 24;
age = '24';
console.log(age);
// Any type Data
var anyData = ["Abc", 1, true];
console.log(anyData);
// Functio in Typescript 
function test(name) {
    return name;
}
console.log(test(firstName));
// Function Signature
var test2;
test2 = function (name) {
    console.log("Hello " + name);
};
test2("Anik");
var ob1 = {
    name: 'ABC',
    id: 1
};
var ob2 = {
    name: 'DEF',
    id: 2
};
var A = function (test) {
    return "Hello " + test.name;
};
var B = function (test) {
    return "Bye" + test.name;
};
console.log(A(ob2));
var C = {
    name: "XYZ",
    Roll: 12,
};
console.log(C.name + " " + C.Roll);
var X = /** @class */ (function () {
    function X() {
        this.name = "ABC";
        this.Roll = 12132;
        this.printExample();
    }
    X.prototype.printExample = function () {
        console.log("Hello from another class!!");
    };
    return X;
}());
var ob = new X();
function logLength(a) {
    console.log(a.length);
    return A;
}
logLength("Hello");
// Enum
var BookList;
(function (BookList) {
    BookList[BookList["A"] = 0] = "A";
    BookList[BookList["B"] = 1] = "B";
    BookList[BookList["C"] = 2] = "C";
    BookList[BookList["D"] = 3] = "D";
})(BookList || (BookList = {}));
console.log(BookList.D);
// Labmda Function
var names = ['AB', 'BC', 'CD', 'DE'];
names.forEach(function (i) {
    console.log(i.toLowerCase());
});
// Working With Union Type
function printFunc(val) {
    if (typeof val === "string") {
        console.log("Its a srting");
    }
    else {
        console.log("Its a number!!");
    }
}
printFunc("ABABDFABF");
function configure(x) {
    if (x == "auto") {
        console.log("Literal Tyes " + x);
    }
    else {
        console.log("Literal Type " + x.length);
    }
}
configure({ length: 27 });
configure("auto");
// To run the file run "tsc test.ts -w" in one terminal
// and "node test" in another
