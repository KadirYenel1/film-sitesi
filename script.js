const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    arrow.addEventListener("click", function () {
        movieLists[i].style.transform = "translateX( -300px)"
 });
});


const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".container,.navbar,.movie-list-conteiner,.sidebar,.sidebar i,.movie-list-container,.movie-list-title,.movie-list-filter,.movie-list-filter select,.toggle.toggle-ball,.movie-list-filter")
ball.addEventListener("click", function(){
  items.forEach((item) => item.classList.toggle("active"))
  
})