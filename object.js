
//--------------- Here object will be created by object literals
const rfId = Symbol()
const laptop1 ={
    model : "001",
    brand :"Dell",
    isloggedIn : false,
    [rfId] : "rf001"
};

// console.log(laptop1.brand);

// // string interpolation

// console.log(`Laptop details are : model name is ${laptop1.model} brand name is ${laptop1.brand}`);

// console.log(typeof rfId);


const user ={
    email : "abhowmick@google.com",
    name :{
        first_name : "arpan",
        last_name : "Bhowmick",
        user_name : "abhowmick"
    },

    age :18,
    password : "helloworld",

    lastweek_screentime : ["4.25 hours","4 hours","6.5 hours","5.5 hours","1.2 hours"]

}
function compare(str){
   
    return parseFloat(str.split(" ")[0])
}
function sorted(arr){
    return arr.sort((a,b)=> compare(a)-compare(b))
}

let new_array = sorted(user.lastweek_screentime)
console.log(new_array);