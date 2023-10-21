const text = document.querySelector(".id");
const textLoad = () => {
    setTimeout(() =>{
        text.textContent = "Front-End Developer";
    },0);
    setTimeout(() =>{
        text.textContent = "Graphic Designer";
    },4000);
}
textLoad();
setInterval(textLoad,8000);