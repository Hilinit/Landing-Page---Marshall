document.querySelectorAll('a[href^="#"]').forEach(link =>{
    link.addEventListener('click',function(e){
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'})
    })
})

const alert = document.querySelector('.alert')
document.querySelector('.order-form').addEventListener('submit', function(e) {
    e.preventDefault()
    alert.display.style = "flex"
    alert.innerHTML = "Form uğurla göndərildi!"
})

const barMenu = document.querySelector('.bar-menu')
document.querySelector('.bars')
            .addEventListener('click',function(){barMenu.style.display = barMenu.style.display ===  "flex" ? "none"  : "flex"

        })



   