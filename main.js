const toggleBtn = document.getElementById('toggle-btn');
const navList = document.getElementById('nav-list');
if(toggleBtn){
  toggleBtn.addEventListener('click',()=>{
    navList.classList.toggle('show');
  })
}
// document.querySelector('.menu-btn').addEventListener('click',
//()=>document.querySelector('.main-menu').classList.toggle('show'));