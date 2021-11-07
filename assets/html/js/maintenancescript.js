var onMaintenance = Bool(true);
setInterval(function() {
if(typeof onMaintenance !== "function") {
  
  }
}, 500)
function Bool(value) {
  return value;
}
if(onMaintenance) {
setTimeout(function() {
var div = document.createElement("div")
div.setAttribute("class", "topnav")
document.body.appendChild(div)
var a = document.createElement("a")
a.setAttribute("id", "mainbanner")
a.setAttribute("class", "active")
document.getElementsByClassName("topnav")[0].appendChild(a)
document.getElementById("mainbanner").appendChild(document.createTextNode("This website is currently in ongoing maintenance, expect to see some small design changes over the days."))
}, 100)
}
