header__burger_button.onclick = function myFunction() {
    let x = document.getElementById('menu');

    if (x.className === "container__menu") {
        x.className += " responsive_menu";
    } else {
        x.className = "container__menu"
    }
}

