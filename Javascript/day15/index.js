// // console.log('hello bhaiyoo')
// //  for of loop
// const a=[10,20,30,49];
// for(var value of a){
//     console.log(a);

// }

// let str='Everyone is Champion'
// for(let value of str){
//     console.log(value)
// }

// const obj = {
//     name:"Chavvi",
//     age:22,
//     gender:"female"
// };

// console.log(obj);

// for(let value of Object.values(obj)){
//     console.log(value, obj[value]);
// }
// for (let value of Object.keys(obj)) {
//     console.log(value, obj[value])
// }

// let arr=[10,20,39,44]
// // const result= arr.map((num)=> num*2)
// // console.log(result)

// const re= arr.forEach((num)=> num*2)
// console.log(re)

const str="invincible gloves is good"
// for(let value of str){
//     console.log(value);
// }

// for(let word of str.split(" ")){
//     console.log(word)
// }

// let obj1={
//     name:"om",
//     age:20
// }
// console.log(Object.getOwnPropertyDescriptor(obj1,"name"))

// ********* for each************/

// let arr=[10,20,30,40]
// arr.forEach((num,index, a) => {
//     a[index]=num*2
//         console.log(a)
// // value changes in orgiial arr also
// })
// console.log(arr)

// *************filter************

let arr=[10,20,30,40,50,60]
const output=arr.filter((x)=>{
    return x*20
})
console.log(output)

let arr3=[10,20,30,40,50,60]
const output3=arr3.filter((x)=>{
    return x>20
})
console.log(output3)

let arr1=[10,20,30,40,50,60]
const output2=arr1.map((x)=>{
    return x*20
})
console.log(output2)