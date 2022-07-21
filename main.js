

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = 'active'
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", () => this.handleClick());
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation ? (link.style.animation = "") : 
            (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)

mobileNavbar.init()


var i = 0;
var tag = document.getElementById("home-text");
var html = document.getElementById("home-text").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 170;

let buttonNtt = document.getElementById('experiencia-ntt')
const fileUrl = './textos/teste.txt'
buttonNtt.addEventListener('mouseover', () => {fetch(fileUrl).then(r => r.text().then(t => document.getElementById('textExperiencia').innerText = t)), document.getElementById('nomeExperiencia').innerText = 'Ntt Data'})
buttonNtt.addEventListener('mouseleave', () => {document.getElementById('textExperiencia').innerText = '', document.getElementById('nomeExperiencia').innerText = ''})

//funcao que vai inverter as cores
// function changeColor(){
//     document.documentElement.style.setProperty('--white', 'black')
// }



