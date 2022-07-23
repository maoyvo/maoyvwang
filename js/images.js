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
// 返回上个页面

function returns() {
    var returns = document.getElementsByTagName("return")[0];

}
