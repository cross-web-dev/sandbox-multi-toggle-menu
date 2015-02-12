document.addEventListener("DOMContentLoaded", function(){
    console.log("Page has been loaded automatically");
    var menu = document.getElementById("menu");
    var menuLink = document.querySelector(".menu-link");

    menuLink.addEventListener("click",function(e){
        e.preventDefault();
        menuLink.classList.toggle("active");
        menu.classList.toggle("active");
    });

});
