
// document.getElementById('images').addEventListener('click',(e)=>{
    
//     //console.log(e.target.parentNode);
//     const removeIt = e.target.parentNode
//     removeIt.remove()
// })


// document.querySelector('#owl').onclick =()=>{
//     alert('owl is being clicked')
// }

// --- event propagation

// document.querySelector('#images').addEventListener('click',(e)=>{
//     console.log('clicked inside thge ul');
//     //alert('owl is being clicked')
// })

document.querySelector('#owl').addEventListener('click',(e)=>{

    console.log(e);
    console.log('owl is being clicked once gain');
    //alert('owl is being clicked once gain')
})


//-----

//-- event capturing mode

// document.querySelector('#images').addEventListener('click',(e)=>{
//     console.log('clicked inside thge ul');
//     //alert('owl is being clicked')
// },true)

// document.querySelector('#owl').addEventListener('click',(e)=>{
//     console.log('owl is being clicked once gain');
//     //alert('owl is being clicked once gain')
// },true)

