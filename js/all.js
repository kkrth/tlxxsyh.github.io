const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const navMenuItems = document.querySelectorAll(".nav-menu li");

console.log("欢迎来到言念的世界！(*^▽^*)");

// 监听函数，每次点击时加上active，再次点击时去掉active
burger.addEventListener("click",()=>{
    burger.classList.toggle("active");
    navMenu.classList.toggle("open");

    navMenuItems.forEach((item,index)=>{
        if(item.style.animation){
            item.style.animation="";
        }else{
            item.style.animation=`0.3s ease-in slideIn forwards ${index * 0.1 +0.3}s`;
        }
    })
})
function index() {
    window.location = "https://tlxxsyh.github.io";
}
function study() {
    window.location = "https://tlxxsyh.github.io/html/study/study_index.html";
}
function expeiment() {
    window.location = "https://tlxxsyh.github.io/html/web/web_index.html";
}
function about() {
    window.location = "https://tlxxsyh.github.io/html/other/other_index.html";
}
function feedback() {
    window.location = "https://tlxxsyh.github.io/html/other/feedback.html";
}