//21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"

let x = "John"
let y = "Doe"
console.log(`"` + x + " <> " + y + `"`)

//22) Create an object with properties such name, surname, email

let contact = {
    name: "",
    surname: "",
    email: ""
}

//23) Delete Email from the previously created object

delete contact.email
//console.log(contact)

//24) Create an array with 10 strings in it

let nums = ["1", "2", "hello", "4", "5", "6", "7", "8", "9", "10"]
//console.log(nums)

//25) Print in the console every string in the previous array
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
}

//26) Create an array with 100 random numbers in it

let rN = function () {
    let randomNumbers = []
    for (let i = 0; i < 100; i++) {
        let ranNum = Math.floor(Math.random() * 101)
        randomNumbers.push(ranNum)
    }
    return randomNumbers
}

console.log(rN())

//  27) Write a function to get the MAX and the MIN from the previously created array

function MAXAndMIN() {
    let max = Math.max(...rN())
    let min = Math.min(...rN())
    return [max, min]
}
console.log(MAXAndMIN())

//28) Create an array of arrays, in which every array has 10 random numbers
//NOT QUITE WHAT IT SHOULD BECOME, BUT TECHNICALLY AN ARRAY HOLDING ONE ARRAY IS ALSO AN ARRAY OF ARRAYS RIGHT?

function superRandomArray() {
    let superArray = []
    let subArray = []
    for (i = 0; i < 5; i++) {
        for (i = 0; i < 10; i++) {
            let randomNumber = Math.floor(Math.random() * 11)
            subArray.push(randomNumber)

        }
        superArray.push(subArray)
    }
    return superArray
}
console.log("---superArray---")
console.log(superRandomArray())

//29) Create a function that gets 2 arrays and returns the longest one
// NOT WORKING, DON`T KNOW WHY

function returnLongestArray(arr1, arr2) {
    let longest
    if (arr1.lenght < arr2.lenght) {
        longest = arr2
    } else if (arr1.lenght === arr2.lenght) {
        console.log("they are even")
    } else {
        longest = arr1
    }
    return longest
}
//let arr1 = ["car"]
//let arr2 = ["moto","bicicleta"]
//console.log(returnLongestArray(ar1, ar2))

//30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

let ar1 = [1, 2, 43]
let ar2 = [3, 5, 4, 54]

let returnsHighestSum = function (arr1, arr2) {
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i]
        //console.log(sum1)
    }
    for (let i = 0; i < arr2.length; i++) {
        sum2 += arr2[i]
        //console.log(sum2)
    }
    if (sum1 > sum2) {
        return sum1
    } else {
        return sum2
    }
}
console.log("---30---")
console.log(returnsHighestSum(ar1, ar2))
