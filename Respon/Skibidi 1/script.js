const wrapper = document.querySelector(".wrapper"); 
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const nextBtn = document.querySelector(".next-btn");

let nextClicked = false;

nextBtn.addEventListener("click", () => {
    if (!nextClicked) {
        question.innerHTML = "Halo Teman Teman.";
        gif.src= "https://raw.githubusercontent.com/anstrea/anstrea.github.io/main/Respon/Skibidi%201/thanks.gif";
        nextBtn.innerHTML = "reply";
        nextClicked = true;
    } else {
        window.location.href= "https://wa.me/6282245578978?text=Aku%20Wibu";
    }
});
