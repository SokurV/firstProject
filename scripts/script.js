burger_button.onclick = function myFunction() {
    let x = document.getElementById('menu');

    if (x.className === "container_menu") {
        x.className += " responsive_menu";
    } else {
        x.className = "container_menu"
    }
}

