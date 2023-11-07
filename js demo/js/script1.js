
// 1. ngôn ngữ kịch bản scripting ( không phải ngôn ngữ lập trình)
// 2. hướng đối tượng không hoàn toàn( dùng như hướng đối tượng nhưng ko có tính chất kế thừa)
// document.getElementsByName() {doucument là 1 đối tượng(object), getElementsByName là phương thức(method)}
// Để truy cập 1 phương thức: tên đối tượng.(chấm)Tên phương thức
var a; //có thể la bất kì kiểu dữ liệu nào
a = "Hello"
a = 1.5;
a = 20;
var today = new Date();// today là 1 object có kiểu date:ngày
var hourNow = today.getHours();// giờ hiện tại
// body.color = green; (thuộc tính chứa giá trị)
var greeting;
if(hourNow > 18){
    greeting = "Good evening"
}else if(hourNow > 12){
    greeting = "Good afternoon"
}else if(hourNow > 0){
    greeting = "Good morning"
}else{
    greeting = "Welcome"
}
document.write('<h3>' + greeting + '</h3>')