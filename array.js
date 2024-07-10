const cars = new Array("Saab", "Volvo", "BMW");
const arr = ["1","2","3"]
//console.log(typeof cars);

// for(let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }
 
let text = "<ul>";
for (let i = 0; i < cars.length; i++) {
  text += "<li>" + cars[i] + "</li>";
}
text += "</ul>"
