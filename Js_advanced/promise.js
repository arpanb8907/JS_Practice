


const promise = new Promise(function(resolve,reject){

    setTimeout(function(){
        //console.log('promise is called');

        let error = true
        if(!error){
            resolve({username:'arpan',password:'123'})
        }

        else{
            reject('ERROR...something went wrong')
        }
        
    },1000)
})

promise.then(function(user){
    //console.log("async code executed");
    console.log(user);
    return user.username

}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);

}).finally(()=> console.log('the promise is either resolved or rejected'))


const promisetwo = new Promise(function(resolve,reject){

    setTimeout(function(){
        //console.log('promise is called');
        let error = true
        if(!error){
            resolve({username:'javascript',password:'123'})
        }

        else{
            reject('ERROR...JS went wrong')
        }
        
        
    },1000)
})

async function consumepromisetwo() {
   try {
    const response = await promisetwo
    console.log(response);
   } catch (error) {
        console.log(error);
   }
}

consumepromisetwo()


async function getallusers(){
    const fetch = await import('node-fetch').then(module => module.default);

    try {
        const response=await fetch('https://api.github.com/users/arpanb8907')
        
        const data = await response.json()

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getallusers()