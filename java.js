const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
})

let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navmenu.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
    // Select the down arrow button
    const downArrow = document.querySelector(".down-arrow a");

    // Add event listener for click event
    downArrow.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        
        // Scroll smoothly to the "Latest Products" section
        document.querySelector("#latest").scrollIntoView({
            behavior: "smooth"
        });
    });
});
