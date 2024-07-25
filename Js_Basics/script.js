const form = document.getElementById('myform');

form.addEventListener('submit',(e)=>{

    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const res = document.getElementById('results')
    
    if(height>0){
        res.textContent = `Your BMI is ${((weight/height**2)*10000).toFixed(2)}`
    }

    else{
        res.textContent =`invalid height`
    }
    

})
