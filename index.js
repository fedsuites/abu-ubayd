const nav =document.querySelector('.list')
const navButton=document.querySelector('.burger')

navButton.addEventListener('click',navToggle)

function navToggle(e){
    if(!e.target.classList.contains('active')){
        e.target.classList.add('active')
        gsap.to('.line1',0.5,{rotate:'45',y:4})
        gsap.to('.line2',0.5,{rotate:'-45', y:-5})
        gsap.fromTo('.media',0.5,{x:'0%'},{x:'100%'})
    }else{
        e.target.classList.remove('active')
        gsap.to('.line1',0.5,{rotate:'0',y:0})
        gsap.to('.line2',0.5,{rotate:'0', y:0})
        gsap.fromTo('.media',0.5,{x:'100%'},{x:'0%'})
    }
 
}

// const user ={
//     name:'alams',
//     greet(){
//         console.log(`Hello there ${this.name}`)
//     }
// }
// user.greet()