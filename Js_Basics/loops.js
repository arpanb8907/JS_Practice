const arr=[1,2,3,4,5,6]

for(let i of arr){
    //console.log(i);
}

const map = new Map()

map.set('in','india')
map.set('aus','australia')
map.set('eng','england')


const cars = [
    {make: "Toyota", model: "Corolla", year: 2022,price:1300050},
    {make: "Tesla", model: "Model 3", year: 2021,price:8304050},
    {make: "Ford", model: "Mustang", year: 1969,price:3320050}
  ];

// cars.forEach((item)=>{
//     console.log(item);
// })

// const newcar = cars.filter((item)=> item.year<2020)

// console.log(newcar);

const d = new Date()
const year=d.getFullYear();
cars.forEach((item)=>{
    
    if(item.year-year<=3){
        item.price*=.8
    }
})

console.log(cars);