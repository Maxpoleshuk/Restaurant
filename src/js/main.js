// Модальное окно
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//Меню

var menu = document.getElementById('myMenu');
menu.onclick = function showMenu() {
  if(menu.className === "menu") {
      menu.className += "responsive";
  } else {
      menu.className = 'menu';
  }
}





