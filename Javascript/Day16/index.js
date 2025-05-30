// const arr=[19,2,34,1,23,3]
// const result= arr.reduce((acc,curr)=>{
//     console.log(acc,curr)
//     acc=acc+curr;
//     return acc;
// },0)
// console.log(result)


let arr = ["orange", "banana", "apple", "orange"];

const count = arr.reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr)) {
        acc[curr]++;
    } else {
        acc[curr] = 1;
    }
    return acc;
}, {}); // <- this is the initial value (an empty object)

console.log(count); // { orange: 2, banana: 1, apple: 1 }
