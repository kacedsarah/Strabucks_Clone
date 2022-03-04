const hamburger=document.getElementById('menu')
const mobileMenu=document.getElementById('mobile-menu')


function MenuCliked(){
    
  hamburger.classList.toggle('open')
  mobileMenu.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll')

}

hamburger.addEventListener('click', MenuCliked)