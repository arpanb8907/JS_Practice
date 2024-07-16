// immediately invoked functions and expression

// It is used to restrict function from the global scope pollution and this function executes immediately  

(function dbc(){
    // named iife
    console.log(`DB is connected`);
})();

(()=>{
    console.log(`DB is connected and loading...`);
})();

((user)=>{
    console.log(`DB is now connected welcome ${user} `);
})('Arpan');
