const navbar = document.getElementById('navbar');
const mobilemenu = document.getElementById('mobilemenu');

const navbarhandler = (eve) => {
    navbar.classList.toggle('show');
    console.log(eve.target);
    eve.target.classList.toggle('fa-times');
    eve.target.classList.toggle('fa-bars');
}





mobilemenu.addEventListener('click', navbarhandler);