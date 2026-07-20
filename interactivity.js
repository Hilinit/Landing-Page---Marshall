document.querySelectorAll('a').forEach(link =>{
    link.addEventListener('click',function(e){
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'})
    })
})
document.querySelector('.btn-submit')
            .addEventListener('click',function(e) {e.preventDefault()
        })


const barMenu = document.querySelector('.bar-menu')
document.querySelector('.bars')
            .addEventListener('click',function(){barMenu.style.display = barMenu.style.display === "none" ? "flex" : "none"
        })