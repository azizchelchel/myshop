// // const {userId, items} = data;
// const items=
//     [
//         {
//          "quantity": 5,
//          "drugId":1,
//          "drugPrice":5
//         },
//         {
//          "quantity": 10,
//          "drugId":2,
//          "drugPrice":3
//         },
//         {
//          "quantity": 15,
//          "drugId":3,
//          "drugPrice":31
//         }
//     ]


// items.map(e => {
//     e.totalItem = parseInt(e.drugPrice) * parseInt(e.quantity);
    
// });

// console.log(items)

// let totalSale = 0;
//     items.forEach(e => {
//         totalSale = totalSale + e.totalItem;
//     });

// console.log(totalSale);


// var friends = [
//     { name: 'John', age: 22 },
//     { name: 'Peter', age: 23 },
//     { name: 'Mark', age: 24 },
//     { name: 'Maria', age: 22 },
//     { name: 'Monica', age: 21 },
//     { name: 'Martha', age: 19 },
// ];

// console.log(Object.keys(friends));
// // var itemsElement = Array.from(items, (e) => e);
// // console.log(itemsElement);

// const date = new Date('2023-02-28 11:37:10.486');
// const year = date.getFullYear();
// const month = String(date.getMonth() + 1).padStart(2, '0');
// const day = String(date.getDate()).padStart(2, '0');
// const dateString = `${year}-${month}-${day}`; // returns "2022-02-28"

// console.log(new Date(dateString));

 // assuming this is the date that you want to increment by one day

// const date2 = new Date(date1.getTime()); // create a new Date object that is a copy of date1
// console.log(date2)
// date2.setDate(date1.getDate() + 1); // increment the day of the month by 1

// console.log(date2.toISOString()); // output the resulting date in ISO string format
// console.log(date1)
// console.log(date1.getDate())
// console.log(date1.getTime())
// console.log(date1.getDay())
// console.log(date1.getFullYear())
// console.log(date1.getMonth())
// const purchaseDate = new Date("2023-05-25");
// const plusOneDay = purchaseDate.setDate(purchaseDate.getDate() + 1)
// const d = new Date(plusOneDay)
// console.log("d "+d)

const f1=(a)=>{
    const c = f2(a);
    console.log(c);
};

const f2 = (b)=>{
    // console.log(b);
    return b;

}

// f1(5);

// const a = new Date("2023-03-15");
// console.log(new Date(a.getTime()

import Joi from 'joi';


const schema = Joi.object({
  myNumber: Joi.number().integer().positive().required(),
});

const data1 = { myNumber: 5 };
const data2 = { myNumber: 0 };

console.log(schema.validate(data1)); // No errors, valid number
console.log(schema.validate(data2)); // Error, 0 is not a positive number




