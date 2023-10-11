const responsive = document.getElementsByClassName("responsive")[0];
const nav = document.getElementById("navbar");

responsive.addEventListener("click", () => {
    console.log("Clicked!")
    nav.classList.toggle("active");
})