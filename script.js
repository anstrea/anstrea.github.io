const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", ()
=> {
    question.innerHTML = "Aaaaa, I
    like you too";
    gif.src = "https://private-user-images.githubusercontent.com/104367878/360309957-a25f0f4e-852b-44fd-b1a3-054743eb3f02.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQzMTI4MDAsIm5iZiI6MTcyNDMxMjUwMCwicGF0aCI6Ii8xMDQzNjc4NzgvMzYwMzA5OTU3LWEyNWYwZjRlLTg1MmItNDRmZC1iMWEzLTA1NDc0M2ViM2YwMi5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgyMlQwNzQxNDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iMGI4YWZlYjIyODFiN2Q1MGJhOTQ2MWNmZWI4ODFhNmEwN2VmYmI4M2FiZmMwMjdjYmYzOTc0MGUxZDc5MTJmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.T9YJQg8E1zIOaDJFHh-1XpBpVEW21c4riPX-BI4Ot9A"; 
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect =
    noBtn.getBoundingClientRect();
    const maxX = window.innerWidth
    noBtnRect.width;
    const maxy = window.innerHeight
    noBtnRect.height;
    const randomX =
    Math.floor(Math.random() *
    maxx);
    const randomY =
    Math.floor(Math.random() *
    maxY);
    
    noBtn.style.left = randomX +
    "px";
    noBtn.style.top = randomy +
    "px";
});