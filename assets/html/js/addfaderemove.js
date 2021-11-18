var clicks = 0;
var egg = new Egg("f,a,d,e", function() {
  if(clicks == 2) {
  alert("you are a bruh")
  }
}).listen();
function addClickTitle() {
  if(clicks == 0) {
    clicks = 1
  }
}
function addClickDemo() {
  if(clicks == 1) {
    clicks = 2
  }
}
