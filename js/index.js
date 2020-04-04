let icon = document.querySelector('.icon');
let navbar = document.getElementById('menu');

icon.addEventListener('click',()=>{
  navbar.classList.toggle('open');
  icon.classList.toggle('open');
})