const body = document.querySelector("body")

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 80){
        body.classList.add("scrolled")
    } else{
        body.classList.remove("scrolled")
    }
})

const hamburger = document.querySelector(".hamburger")
const gotoAddress = document.querySelector(".gotoaddress")
const backdrop = document.querySelector(".backdrop")
const backdropx = document.querySelector(".backdropx")

hamburger.addEventListener("click", ()=>{
    body.classList.toggle("show-menu")
})

gotoAddress.addEventListener("click", ()=>{
    body.classList.add("copying")
})

backdrop.addEventListener("click", ()=>{
    body.classList.remove("show-menu")
})

backdropx.addEventListener("click", ()=>{
    body.classList.remove("copying")
})

window.scrollTo({
    top: 0,
    left:0,
    behavior: "smooth"
})

function reload(){
    location.reload()
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function closeMenu(){
    body.classList.remove("show-menu")
}

window.addEventListener("load", ()=>{
    setTimeout(function(){
        body.classList.remove("loading")
    }, 1000)
})

setTimeout(
    function(){
        body.classList.remove("loading")
    }, 8000
)








const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // entry.target.classList.remove('show')
        }
    });
},
{
    threshold: 0.2,
    // rootMargin: "-100px"
}


);


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));