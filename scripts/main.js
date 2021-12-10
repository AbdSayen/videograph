let openMenuBtn = document.querySelector('#open-menu-btn');
let openedMenu = document.querySelector('.opened-menu');

const openMenu = () => {
    openedMenu.classList.toggle('active');
    console.log('qwe');
}

openMenuBtn.addEventListener('click', openMenu);