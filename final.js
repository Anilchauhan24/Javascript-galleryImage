const numbers = [34, 56, 7890, 23, 45, 678, 90, 232457, 67687];

numbers.sort(fuckData);

function fuckData(a, b) {

    return a - b;
}


console.log(numbers)

//23,34,45,56,90,678,7890,67687,232457 
