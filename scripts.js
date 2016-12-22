/*
function myFunction() {
  document.getElementById("demo").innerHTML = "Write about yourself below";
}
*/
function createForm() {
    var x = document.createElement("FORM");
    x.setAttribute("id", "myForm");
    document.body.appendChild(x);

     var y = document.createElement("INPUT");
     y.setAttribute("type", "text");
     y.setAttribute("value", "talk about yourself");
     y.setAttribute("class", "search");
     y.setAttribute("onkeydown", "search(this)");
     document.getElementById("myForm").appendChild(y);

  //  var node = document.createElement("LI"); // "P" -
  //  var textnode = document.createTextNode("Water");
  //  node.appendChild(textnode);
  //  document.getElementById("myList").appendChild(node);
}
document.getElementByTagName("INPUT").addEventListener("click", search);

 function search(ele) {
   if(event.keyCode == 13){
     var para = document.createElement("p"); // creates paragraph
     var node = document.createTextNode(ele.value);
     para.appendChild(node);
     var element = document.getElementById("div1");
     element.appendChild(para);
     document.write("Profile: "+ ele.value) // testing
  }
}

/*

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);

*/
