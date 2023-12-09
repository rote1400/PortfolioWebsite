window.addEventListener("scroll", function(){
    var header = document.querySelector("#desktop-nav");
    header.classList.toggle("sticky", 
        this.window.scrollY > 0);
})

function toggleMenu() {
    const menu = document.querySelector(".hamburger-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}