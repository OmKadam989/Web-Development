
// let obj={
//     name:"om",
//     age:21,
//     city:"mumbai"
// }

// for (let key in obj){
//     console.log(key + ":",obj[key]);
// }

// console.log(Object.keys(obj))
// let obj2= Object.create(obj)
//     obj2.money=1000,
//     obj2.game="boxing"
// console.log(Object.keys(obj2))

// for(let key in obj2){
//     console.log(obj2[key])
// }

// console.log(Object.getOwnPropertyNames(obj))

// let obj={
//     name:"om",
//     age:21,
//     city:"mumbai"
// }

// Object.defineProperty(obj,'name',
//     {
//         value:"om",
//         writable:true,
//         enumerable:false,
//         configurable:true
//     }
// )
// console.log(Object.getOwnPropertyDescriptors(obj));
// // console.log(Object.getOwnPropertyNames(obj))

// console.log(obj)

const arr=[10,20,34,40,50]
arr.name="om"

// for(let index=0; index<arr.length; index++){
//     console.log(index, arr[index])
// }

for(let key in arr){
    console.log(key, arr[key])
}

for(let value of arr){
    console.log(value)
}