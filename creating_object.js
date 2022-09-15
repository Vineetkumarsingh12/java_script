//  The way creating object.
// 1.
"use strict"
// let book=new Object();   // Object
// book.tittle="Harry potter";
// book.author="J.k  Rousling";
// book["tittle"]="vineet";
// book.author="vikas";
// console.log(book.author);
// console.log(book);

// 2.
// let obj1=Object.create({x:1,y:2});
// let o2=obj1.x+obj1.y;
// console.log("O2 is",o2);

// 3.
const mycar=new Object();  // we can not change reference of object.
mycar.company="BMW";
mycar.model="XUV";
mycar.year="2022";
mycar.model="Xl";
console.log(mycar);
