const btnMobile = document.querySelector('.btnMobile');
const navlinks = document.getElementById('navlinks');
const icon = document.querySelector('.btnMobile i');

btnMobile.addEventListener('click', () => {
  navlinks.classList.toggle('show');

  if (navlinks.classList.contains('show')) {
    // Menu ABERTO → mostra o X
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    // Menu FECHADO → mostra o ícone de menu
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

window.addEventListener('scroll', () => {

    const header = document .getElementById('header')

    if (window.scrollY > 0) {
      header.style.boxShadow ='0 4px 10px rgba(0,0,0,0.2)'
    }

    else {
      header.style.boxShadow = 'none'
    
    }
})