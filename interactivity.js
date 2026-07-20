document.querySelectorAll('a[href^="#"]').forEach(link =>{
    link.addEventListener('click',function(e){
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'})
    })
})

const alertBox = document.querySelector('.alert')
const form = document.querySelector('.order-form')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    alertBox.querySelector('.alert-message').innerHTML = "Form uğurla göndərildi!"
    alertBox.style.display = "flex"
    form.reset()
})

const barMenu = document.querySelector('.bar-menu')
document.querySelector('.bars')
            .addEventListener('click',function(){barMenu.style.display = barMenu.style.display ===  "flex" ? "none"  : "flex"

        })



   