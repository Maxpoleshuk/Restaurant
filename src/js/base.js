//Кнопка вверх
window.onload = function () {

    var scrolled;
    var timer;

    document.getElementById('up').onclick = function () {
        scrolled = window.pageYOffset;

        scrollToTop()
    }


    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 30; //скорость прокрутки
            timer = setTimeout(scrollToTop, 1);
        } else {
            clearTimeout(timer);
            window.scrollTo(0, 0);

        }
    }
    // if (scrolled < 50) {
    //     document.getElementById("up").style.display = "block";
    // } else {
    //     document.getElementById("up").style.display = "none";
    // }

}


// Модальное окно
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//Меню

var menu = document.getElementById('myMenu');
menu.onclick = function showMenu() {
    if (menu.className === "menu") {
        menu.className += " responsive";
    } else {
        menu.className = 'menu';
    }
}
//Карусель
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");

    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}

