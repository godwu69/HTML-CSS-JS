window.onload = init;

function init(){
   document.getElementById("btn1").onclick = changeHeading1;
   document.getElementById("btn2").onclick = changeHeading2;
   document.getElementById("btn3").onclick = changeParagraph;
}
function changeHeading1(){
   const elm = document.getElementById("heading1");
   elm.textContent = "Hello";
   // Create new element
   // document.write("<p></p>");
   const newElm = document.createElement('p');
   newElm.textContent = "Hello new P";
   elm.after(newElm);

}
function changeHeading2(){
   const elms = document.getElementsByTagName('h2');// Array of elements
   for(const elm of elms){
    elm.textContent = "Change H2 to everything";
   }
   console.log(elms)//  Kiểm tra
} 
function changeParagraph(){
   const elms = document.getElementsByClassName('para'); // Array of elements
   for(const elm of elms){
    elm.textContent = "Hello, again";
   }
}