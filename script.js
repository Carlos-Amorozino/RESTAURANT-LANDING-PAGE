const mobileBtn = document.querySelector(`#mobile-btn`)

// MOBILE HEADER

function mobileMenu() {
    const mobileMenu = document.querySelector(`#mobile-menu`)
    const mobileBtnIcon = document.querySelector(`#mobile-btn i`)

    mobileMenu.classList.toggle(`active`)

    if (mobileBtnIcon.classList.contains("fa-bars")) {
        mobileBtnIcon.classList.replace("fa-bars", "fa-x");
    } else {
        mobileBtnIcon.classList.replace("fa-x", "fa-bars");
    }
}

mobileBtn.addEventListener(`click`, mobileMenu)

// SOMBRA DO HEADER

window.addEventListener(`scroll`, () => {

    const header = document.querySelector(`header`)

    if (window.scrollY != 0) {
        header.style.boxShadow = `0 0 3px 0 rgba(0, 0, 0, .5)`
    } else {
        header.style.boxShadow = `none`
    }
})

// TROCA DE SECTION DO HEADER

const sections = document.querySelectorAll(`section`)
const navListItens = document.querySelectorAll(`.nav-item`)

window.addEventListener(`scroll`, () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const link = document.querySelectorAll(`a[href="#${section.id}"]`);

        if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
        ) {
            navListItens.forEach(item => item.classList.remove(`active`))
            link.forEach(i => {
                i.parentElement.classList.add(`active`)
            })
        }
    })
})

// PRÓXIMO PASSO: FAZER A TROCA DE SECTION DO HEADER FUNCIONAR PARA MOBILE