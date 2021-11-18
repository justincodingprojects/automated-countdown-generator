var clicks = 0;
var egg = new Egg("f", function() {
  if(clicks == 3) {
    document.getElementById("fadetolinear").style.display = ""
    document.getElementById("fadetolinear2").style.display = ""
  }
}).listen();
function addClickTitle() {
  if(clicks == 0) {
    clicks = 1
  } else if(clicks == 1) {
    clicks = 2
  }
}
function addClickDemo() {
  if(clicks == 2) {
    clicks = 3
  }
}
