const TogItem = document.querySelector('.toggle');
const NavItem = document.querySelector('.navigation');
TogItem.onclick = function(){
    TogItem.classList.toggle('active');
    NavItem.classList.toggle('active');
}