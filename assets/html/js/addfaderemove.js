var clicks = 0;
$('#title').click(function() {
  if(clicks == 0) {
    clicks = 1
  } else if(clicks == 1) {
    clicks == 2
  }
})
$('#demo').click(function() {
  if(clicks == 0) {
    clicks = 1
  } else if(clicks == 1) {
    clicks == 2
  }
})
var egg = new Egg("f,a,d,e", function() {
  if(clicks == 2) {
  alert("you are a bruh")
  }
}).listen();
