// Question No 1-------
function circuitPower(voltage, current) {
    return voltage * current;
}
console.log(circuitPower(110, 3)); 


// Question No 2--------
function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    else{
        return Math.max(...numbers);
    }
}
const arrayMax = [1,22,20,-10,30,40,50,100,120]
const arrNull = []
console.log(findMaxNumber(arrayMax))
console.log(findMaxNumber(arrNull))


// Question No 3 -------
function mergeArrays(array1 , array2) {
    let newArr = [...array1, ...array2]
    return newArr;
}
const arr1 = ['Mango' , 'Banana' , 'Grapes']
const arr2 = ['Apple' , 'Lemons' , 'Oranges']
console.log(mergeArrays(arr1,arr2))


// Question 4 -------

function arrayValuesTypes(arrN) {
    let newArr = [];
    for (let i = 0; i < arrN.length; i++) {
        newArr.push(typeof arrN[i]);
    }
    return newArr
}
const num1 = 10;
const num2 =  20;
const strNull = '';
const objectArr = [1,2,3,4]

console.log(arrayValuesTypes([num1 ,num2 ,strNull,objectArr]));