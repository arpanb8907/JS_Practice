const course ={
    course_name : "Javascript",
    cost : "999",
    source : "udemy",
    duration : "10 Hours",

    welcome_message : function(){
        console.log(this);
        console.log(`welcome to ${this.course_name}`);
    },

    // description : ()=>{
    //     console.log(`this a ${course_name} from ${source}`);
    // }

    // above comment code will give error as we can not use this inside ()=> function
}

//course.welcome_message()
//course.description()


const add = (x,y)=>{
    return x+y
}

// implicit return 
const sub = (x,y)=> x-y 

console.log(add(4,7));
console.log(sub(18,45));