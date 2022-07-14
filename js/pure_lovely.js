// 时间显示
function time() {
    var vWeek, vWeek_s, vDay;
    vWeek = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    vWeek_s = date.getDay();
    document.getElementById("time").innerHTML = year + "年" + month + "月" + day + "日" + hours + "时" + minutes + "分" + seconds + "秒" + "\t" + vWeek[vWeek_s];

};
setInterval("time()", 1000);
// 问候语显示
function greets() {
    var greets = "";
    var date = new Date();
    hour = date.getHours();
    if (hour < 0) {
        greets = "哎呀,时间获取失败……"
    } else if (hour < 4) {
        greets = "凌晨好~";
    } else if (hour < 11) {
        greets = "早上好~";
    } else if (hour < 13) {
        greets = "中午好~";
    } else if (hour < 18) {
        greets = "下午好~";
    } else if (hour < 20) {
        greets = "傍晚好~";
    } else if (hour < 22) {
        greets = "晚上好~";
    } else if (hour <= 24) {
        greets = "午夜好~";
    } else if (hour > 24) {
        greets = "哎呀,时间获取失败……"
    }
    document.getElementById("greets").innerHTML = greets;
}
setInterval("greets()");
// 图片切换
window.onload = function () {
    // 获取img标签
    var img = document.getElementsByTagName("banner")[0];
    // 创建一个数组用于保存图片的路径
    var imgArr = ["../upload/cover/660b7090d6fd2e42d2bb21e017082350cb14dc25.jpg", "../upload/cover/c4491bca6a81e53e1998d38b8c3f64e8d2b8360f.jpg"];
    // 创建一个变量保存当前正在显示的图片的索引
    var index = 0;//默认显示的是第一张
    // 获取a标签
    var a = document.getElementsByTagName("enter")[0];
    // 创建一个数组用于保存链接的路径
    var aArr1 = ["video/660b7090d6fd2e42d2bb21e017082350cb14dc25.html", "video/c4491bca6a81e53e1998d38b8c3f64e8d2b8360f.html"];
    // 创建一个变量保存当前正在显示的图片的超链接的索引
    var index1 = 0; // 默认第一个路径
    // 给上一张按钮绑定单击事件
    var prev = document.getElementById("prev");
    prev.onclick = function () {
        index--;
        if (index < 0) {
            index = imgArr.length - 1;
        }
        banner.src = imgArr[index];
        index1--;
        if (index1 < 0) {
            index1 = aArr1.length - 1;
        }
        enter.href = aArr1[index1];
    }

    // 给下一张按钮绑定单击事件
    var next = document.getElementById("next");
    next.onclick = function () {
        index++;
        if (index > imgArr.length - 1) {
            index = 0;
        }
        banner.src = imgArr[index];
        index1++;
        if (index1 > aArr1.length - 1) {
            index1 = 0;
        }
        enter.href = aArr1[index1];
    }

}
// 返回上个页面

function returns() {
    var returns = document.getElementsByTagName("return")[0];

}
