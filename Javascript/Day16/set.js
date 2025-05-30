// set store unique value

// const set1= new Set([21,3,43,2,21])
    // console.log(arr)

// arr.add(10)
// arr.add(34)
// console.log(arr

// set1.delete(3)
// console.log(set1)

// const set1= new Set(["rohitnegi9", "omiiii01", "ruwww"])
// let new_user="omiiii01"
// console.log(set1.has(new_user))
// if(!set1.has(new_user)){
//     set1.add(new_user)
// }
// else{
//     console.log("user already exists")
// }
// console.log(set1)

// union

let set5= new Set([1,2,3,4])
let set6= new Set([3,4,5,6])
let union = new Set([...set5,...set6])
console.log(union)

// intersection
let intersection= new Set([...set5].filter((num)=> set6.has(num)))
console.log(intersection)
