// 左下角个人信息页的显示
$(".dot").hover(function () {
    $("#dot-message").css("margin-left", "10px");
    $("#dot-message").css("opacity", "1");
}, function () {
    $("#dot-message").css("opacity", "0");
    $("#dot-message").css("margin-left", "10px");
});
// 拾色器按钮等功能的实现
// 寻找颜色按钮：修改左边展示的像素点颜色，并且修改颜色值
function searchColor(){
    colorStr = document.getElementById("color-choose").value;
    $(".pixel").css("background-color",colorStr);
    document.getElementById("color-text").value=colorStr;
}
// 随机颜色按钮：随机返回一个颜色
function randomColor(){
    colorStr = "#"+("00000"+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
    $(".pixel").css("background-color",colorStr);
    document.getElementById("color-text").value=colorStr;
    document.getElementById("color-choose").value=colorStr;
}
// 每个人的颜色信息
$("#dot_1").hover(function () {
    // alert("123");
    $("#dot-name").text("言念的像素点");
    $("#dot-colorID").text("颜色编号：#5395EB");
    $("#dot-owner").text("领养者：Syhang");
    $("#pixel-name").text("#5395EB");
    $("#pixel-owner").text("认养人：言念");
    $(".pixel").css("background-color","#5395EB");
    $("#pixel-name").css("color","#5395EB");
}, function () {
    $("#dot-message").css("opacity", "0");
});
$("#dot_2").hover(function () {
    $("#dot-name").text("Frankie的像素点");
    $("#dot-colorID").text("颜色编号：#00FFFF");
    $("#dot-owner").text("领养者：Frankie");
    $("#pixel-name").text("#00FFFF");
    $("#pixel-owner").text("认养人：Frankie");
    $(".pixel").css("background-color","#00FFFF");
    $("#pixel-name").css("color","#00FFFF");
}, function () {
    $("#dot-message").css("opacity", "0");
});
$("#dot_3").hover(function () {
    $("#dot-name").text("小小飞");
    $("#dot-colorID").text("颜色编号：#335BA6");
    $("#dot-owner").text("领养者：洪航飞");
    $("#pixel-name").text("#335BA6");
    $("#pixel-owner").text("认养人：洪航飞");
    $(".pixel").css("background-color","#335BA6");
    $("#pixel-name").css("color","#335BA6");
}, function () {
    $("#dot-message").css("opacity", "0");
});