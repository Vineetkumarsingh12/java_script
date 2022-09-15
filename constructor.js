//function and class inheritance
function student(name,rollno,Class)
{this.name="vikas";
this.rollno=1;
this.Class="X";

}
class inherit extends student
{
    constrctor(name,rollno)
    {
    this.name=name;
    this.rollno=rollno;
    }
}
let  s=new inherit("vineet",2);
console.log(s);


//class inheritance
// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand,mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
  
//   mycar = new Model("Ford", "Mustang");
//   console.log(mycar);