//date
let mydate=new Date()

// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())
// console.log(mydate.toTimeString())
// console.log(typeof mydate)


// let mycreateddate=new Date(2023,4,23)
//  let mycreateddate=new Date(2023,4,23,5,6,40)
//  let mycreateddate=new Date(2023,4,23,5,6,40)
//  let mycreateddate=new Date("2003-05-30")
 let mycreateddate=new Date("05-30-2003")
// console.log(mycreateddate.toLocaleString());
// console.log(mycreateddate.toLocaleDateString());

// let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(mycreateddate.getTime());

let newdate=new Date("05-30-2003");
// console.log(newdate.getMonth()+1);
// console.log(newdate);
// console.log(newdate.getDay());
// console.log(newdate.toDateString());/

console.log(newdate.toLocaleString('default',{
    weekday:"long",
    era:"long",
    day:"2-digit",
    hourCycle:"h24"
}))


