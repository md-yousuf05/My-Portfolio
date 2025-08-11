let c=document.getElementsByClassName('points')
let f= document.getElementById('frame')

for(let i of c){
    i.addEventListener('click',()=>{
        // console.log(i.innerText)
        if(i.innerText == 'Skills'){
            f.style.transform = 'translate(0px)'
        }else if(i.innerText == 'Education'){
            f.style.transform = 'translate(-400px)'
        }else{
            f.style.transform = 'translate(-800px)'
        }
        
    })
}
