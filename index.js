// Write a function called findEvenNumbers that takes an array of numbers as input and returns a new 
// array containing only the even numbers from the original array.


// findEvenNumbers([1, 2, 3, 4, 5]); // Expected output: [2, 4]
// findEvenNumbers([10, 21, 30, 45, 50]); // Expected output: [10, 30, 50]
// findEvenNumbers([7, 9, 11, 13]); // Expected output: []


const findEvenNumbers =(arr)=>{
    return arr.filter((value,i)=> value%2 ==0)
}
console.log(findEvenNumbers([1, 2, 3, 4, 5]))
