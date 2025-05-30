// // // how to declare const
// const obj5={
//     name:'om',
//     age:20,
//     hobby:'music',
//     undefined:20,
//     'void value':19
// }
// console.log(obj5);
// console.log(obj5.hobby);
// console.log(obj5["void value"]);


// const person = new Object()
// person.name='subodh';
// person.age=23
// person.edducation='btech'

// console.log(person)
// delete person.age;
// console.log(person)
// person.name='muskan'
// person.edducation=`occ therepist`
// console.log(person)


// class people{
//     constructor(na,ag,gn){
//         this.name=na;
//         this.age=ag;
//         this.gender=gn;
//     }

// }
// let per1=new people('om',20,'male');
// let per2= new people('muskan',23,'female')
// console.log(per1,per2);
// // declare as a int
// const obj9={
//     0:20,
//     1:30,
//     2:40,
//     5:60
// }
// console.log(obj9);
// console.log(obj9['0']);

// const obj11={
//     name:'harsh',
//     age:23,
//     "account no" : 202020,
//     "account bal ":2020
// }
// console.log(obj11);

// // const arr2 =new Array(`harsh`,23,202020,2020);
// // console.log(arr2);

// // if we want key only
// const arr= Object.keys(obj11)
// console.log(arr)

// // want value only
// const arr1=Object.values(obj11)
//  console.log(arr1)
// // want both
// // is=f we want both]]

// const arr2= Object.entries(obj11)
// console.log(arr2)

// let obj1={a:1,b:2}
// let obj2={c:3,d:4}


// // const obj3 = Object.assign({},obj1,obj2)
// // obj3.g=5;

// // console.log(obj3)
// // console.log(obj1)
// const obj={...obj1,...obj2}
// console.log(obj)


// const car={
//     car:"maclerean",
//     say:'hello'
// }
// console.log(car['car']);

class person{
    constructor(na,ag,ca){

    this.name=na;
    this.age=ag;
    this.car=ca;

    }
}

let per1= new person('om',13,'mustang');
let per2= new person('harsh',22,'range rover')
console.log(per1,per2)