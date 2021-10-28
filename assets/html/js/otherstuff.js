var url = window.location.href;
alert(window.location.href)
var setYear = url.substring(url.indexOf('year=') + 1).split(`][month`)[0]
alert(setYear)
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
