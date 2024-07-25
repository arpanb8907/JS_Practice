
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
var id
const change = function(){
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    var randomcolor = "rgb(" + R + "," + G + "," + B + ")";  
    document.body.style.backgroundColor= randomcolor

}
start.addEventListener('click',()=>{

    if(!id){
        id=setInterval(change,1000)
    }
    
    
})

stop.addEventListener('click',()=>{
    console.log('stop');
    clearInterval(id)
    id=null
})