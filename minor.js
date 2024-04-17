var tl= gsap.timeline({
  scrollTrigger:{
trigger:".main",
start:"50% 50%",
end:"250% 50%",
scrub:true,
pin:true,
// markers:true,
  }
})

tl.to(".svg",{
  maskSize:"700%"
},'a');
tl.to(".img",{
  backgroundSize:"100%"
},'a');

const hamMenu=document.querySelector('.ham-menu');

const offscreenmenu=document.querySelector('.off-screen-menu');

hamMenu.addEventListener("click",()=>{
  hamMenu.classList.toggle('active');
  offscreenmenu.classList.toggle('active')
})

