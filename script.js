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

const date1 = new Date("2023-02-28"); // assuming this is the date that you want to increment by one day

const date2 = new Date(date1.getTime()); // create a new Date object that is a copy of date1
console.log(date2)
date2.setDate(date1.getDate() + 1); // increment the day of the month by 1

console.log(date2.toISOString()); // output the resulting date in ISO string format
