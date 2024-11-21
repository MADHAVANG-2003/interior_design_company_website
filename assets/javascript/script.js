const nav=document.querySelector('ul');
const menu=document.querySelector('.menu');
const link=document.querySelector('.navlinks ul');
const fab =document.querySelector('.fba');

menu.addEventListener('click',()=>{
  nav.classList.toggle('nav');
  menu.classList.toggle('cross');
})
link.addEventListener('click',()=>{
  nav.classList.toggle('nav');
  menu.classList.toggle('cross');
})

window.addEventListener('scroll',()=>{
  fab.classList.toggle("up",window.scrollY > 130);
});
