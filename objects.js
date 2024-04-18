const people=[
    {name:"Alice",age:17},
    {name:"Eunice",age:22},
    {name:"Chharlie",age:14},
    {name:"Max",age:19}
];
function peopleAge(people){
 return people.filter(aged=>aged.age>18 ).map (aged=>aged.name)
}

console.log(peopleAge(people));
const products=[
    {name:'laptop',price:1200,category:'Electronics'},
    {name:'Shirt',price:25,category:'Clothing'},
    {name:'Headphones',price:80,category:'Electronics'},
    {name:'Shoes',price:60,category:'Clothing'}
];
function Categorygroup(products){
const groupByCategory=Object.groupBy(products,product =>product.category)
 return groupByCategory

}

console.log(Categorygroup(products));
const students = [
    {name:"John",scores:[90,80,85]},
    {name:"Jane",scores:[95,92,88]},
   {name:"Jim",scores:[70,80,75]},
    {name:"Jill",scores:[85,90,84]}
];
function findAverage(students){
  return students.filter(student =>{const avg = student.scores.reduce((acc,curr) => acc+curr) / student.scores.length;
   return avg>=85}).map(student =>student.name
  );
}
console.log(findAverage(students));

const car={
    make:"Ford",
    model:"Ranger",
    year:2023,
    displayInfo:function(){
console.log((`Make:${this.make},Model:${this.model},Year${this.year}`));
    },
};

function AdditionAge(car){
    car["age"]= 2024 -car.year
    console.log(car);
}
AdditionAge(car)

