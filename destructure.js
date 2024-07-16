const course ={
    course_name : "Javascript",
    cost : "999",
    source : "udemy",
    duration : "10 Hours",

    welcome_message : function(){
        console.log(`welcome to ${this.course_name}`);
    }
}

const {source:s,cost:c} = course

console.log([s,c]);

