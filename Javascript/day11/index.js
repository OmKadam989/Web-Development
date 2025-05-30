// shallow xopy
// let obj1={
//     name:'om',
//     age:20,
//     arr:[10,20,30],
//     address:{
//         place:'nalasopara',
//         pincode:401209
//     }
// }
// let obj2=obj1;
// obj2.address.pincode=400020;

// console.log(obj2,obj1);

// // deep copy    
// let obj3=structuredClone(obj1)
// obj3.age=10;
// console.log(obj3)

const mushrooms1 = {
    amanita: ["muscaria", "virosa"],
  };
  
  const mushrooms2 = structuredClone(mushrooms1);
  
  mushrooms2.amanita.push("pantherina");
  mushrooms1.amanita.pop();
  
  console.log(mushrooms2.amanita); // ["muscaria", "virosa", "pantherina"]
  console.log(mushrooms1.amanita); // ["muscaria"]
  