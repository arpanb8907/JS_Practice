//-----------------Here object will be created  using singleton object 

const laptop1 = new Object();

laptop1.brand = "Macbook"
laptop1.model = "002"
laptop1.os = "Mac-Os"
laptop1.isloggedIn = false


// there is a method called freeze which is used to restrict object property updation.

Object.freeze(laptop1);

laptop1.isloggedIn = true

console.log(laptop1);

