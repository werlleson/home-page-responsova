const hamburguer = document.querySelector('.hamburguer')
const headerUl = document.querySelector('.header-ul') 

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active')

    headerUl.classList.toggle('show')
})
