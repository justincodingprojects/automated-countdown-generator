var url = window.location.href;
alert(window.location.href)
var setDate = url.substring(url.indexOf('hour=') + 1).split(`
`)[0]
     var egg = new Egg();
egg
  .addCode("q", function() {
  if(document.body.style.backgroundColor == "white" || document.body.style.backgroundColor == "") {
    document.body.style.backgroundColor = "black";
    document.getElementById("demo").style.color = "white";
} else {
    document.body.style.backgroundColor = "white";
    document.getElementById("demo").style.color = "black";
}
  }).listen();
