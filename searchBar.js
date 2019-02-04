var $ = function (id) {
  console.log("hello");
 return document.getElementById(id);
}

var enter_click = function () {
  var searchEntry = $("searchEntry").value;
  var price = $("price").value;
  var distance = $("distance").value;
  alert (searchEntry);
  alert (price);
  alert (distance);
  window.location="file:///Users/KatieMarie/Desktop/Drexel/201825/CI%20103/searchResults.html";

  if ( searchEntry == Pizza || pizza) {
    window.location="https://www.google.com";
  }
}
window.onload = function () {
  $("enter").onclick = enter_click;
}
