let value=[3,"vikas",{comp:"Telsuko"},function(){console.log("function");}]
// let value=[3,"vikas",{comp:"Telsuko"},()=>{console.log("function");}]
console.log(value);
value[3]();//function.
console.log(value[2]);//object.