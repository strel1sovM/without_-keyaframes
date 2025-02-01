const menu = document.querySelector('.hiden')
menu.classList.add('hide')
console.log(menu);
const show = document.querySelector('.btn')
const lockin = document.querySelector('.svgs')
show.onclick = () => {
    menu.classList.remove('hide');
    menu.classList.add('show');
};

lockin.onclick = () => {
    menu.classList.remove('show');
    menu.classList.add('hide');
};
