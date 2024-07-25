const userInput = document.querySelector('.guessField')
const prevguess = document.querySelector('.guesses')
const count = document.querySelector('.lastResult')

//const random = parseInt((Math.random()*100)+1)
const random = 18
const form = document.getElementById("form")
const arr=[]
const result = document.querySelector('.lowOrHi')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    if(count.textContent==0){
        result.textContent = 'you ran out of attempt.. please refresh the page to restart'
    }
    else if(userInput.value==random){
        result.textContent = "Congratulations you guessed correct"
        setTimeout(() => {                  
            window.location.reload()  
        }, 2000);
       
    }

    else{
        arr.push(userInput.value)
        let tmp = ""
        arr.forEach((e)=>{
            tmp+=e 
            tmp+=" "
        })
        prevguess.textContent = tmp 

        count.textContent = (parseInt(count.textContent)-1).toString()


    }
})