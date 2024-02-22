// Array
// length = LastIndex + 1
// lastIndex = Length - 1


// Constructor Pattern
const a1 = new Array();
// console.log(al, al.length);


/**
 * Array: Traverse Array Element
 */

const arr = [1,2,3,4,5];
const n = arr[3];
const m = arr[2];
const x = 1,
        y= 0;

// console.log(m,n,arr[x], arr[y], arr[x], + arr[y], arr[x + y+ 1]);


let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
// console.log(sum);



// find Large Number
const myArray = [23,28,39,49,56,100];

let largestNumber = myArray[0]
for (let i = 1; i < myArray.length; i++) {
    if(myArray[i] > largestNumber){
        largestNumber = myArray[i]
    }
}

// console.log(largestNumber);





/**
 * Array fill Method
 */
const arr2  = new Array(10)
arr2.fill(0)
// console.log(arr2);


const names = ['Tomal' , 'kamal' , 'Salvy'];
names[0] = false;
names[1]= 'jamal'
names[2]='Foysal'
// console.log(names);


// Fil Array and Update
const response = new Array(9)
response.fill(false);

// console.log(response);

// Array is mutable
const arr03 = [23,28,39,49,56,100];
function Update(myArr) {
        for (let i = 0; i < arr03.length; i++) {
            arr03[i] = `${i+ 1}. ${arr03[i]}`;
        }
        return myArr
}

Update(names)
// console.log(names);


/**
 * Array of function
 */
let sums = (a, b) => a + b;
let sub = (a , b) => a - b;
let times = (a , b) => a * b;
let div = (a, b) => a / b;
let mod = (a , b) => a % b;

const func = [sums, sub, times, div, mod];
const a = 10
const b = 20

for(let i = 0; i < func.length; i++){
    const result = func[i](a ,b)
    console.log(`[${func[i].name}] Result = ${result}`);
}