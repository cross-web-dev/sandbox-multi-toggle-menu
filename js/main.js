document.addEventListener("DOMContentLoaded", function(){
    console.log("Page has been loaded automatically");
    var menu = document.getElementById("menu");
    var menuLink = document.querySelector(".menu-link");
    var menuTrigger = document.querySelector(".has-submenu > a");

    menuLink.addEventListener("click",function(e){
        e.preventDefault();
        menuLink.classList.toggle("active");
        menu.classList.toggle("active");
    });

    menuTrigger.addEventListener("click",function(e){
        e.preventDefault();
        this.classList.toggle("active");

        this.nextElementSibling.classList.toggle("active");
    });
});
