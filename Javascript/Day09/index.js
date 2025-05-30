// let num1= 231
// let num2= new Number(231)
// let num3= new Number(231)

// console.log(num1==num2)
// console.log(num2==num3)

// let num4=740.47
// console.log(num4.toFixed(2))
// console.log(num4.toPrecision(3))
// console.log(num4.toString(2))

// let d=new Date();
// console.log(d)
// console.log(d.getTime())
// console.log(d.toDateString())
// console.log(d.getDate())
// console.log(d.getMilliseconds())
// console.log(d.getMonth())
// console.log(d.getTimezoneOffsetet)
// console.log(d.getTime())


// setting date component
// const d= new Date()
// d.setDate(4);
// d.setMonth(12);
// d.setFullYear(2004);
// console.log(d.toString())


// DAte calucation

const date1= new Date();
const date2= new Date(`2004-12-24`);
const date= date1-date2;
// console.log(date.toString())

const day= Math.floor(date/(1000*60*60*24))
console.log(day)
const hour= Math.floor(date/(1000*60*60)%24);
console.log(hour)
const minute= Math.floor(date/(1000*60)%60);
console.log(minute)
const second= Math.floor(date/(1000)%60);
console.log(second);
console.log(`The days I have lived is  ${day} Days ${hour} hour ${minute}minute ${second } second`);