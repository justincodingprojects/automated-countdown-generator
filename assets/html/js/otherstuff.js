var url = window.location.href;
alert(window.location.href)
var setYear = url.substring(url.indexOf('year=') + 5).split(`][month`)[0]
alert(setYear)
var setMonth = url.substring(url.indexOf('month=') + 6).split(`][day`)[0]
alert(setMonth)
var setDay = url.substring(url.indexOf('day=') + 4).split(`]T[hour`)[0]
alert(setDay)
var setHour = url.substring(url.indexOf('hour=') + 5).split(`][minute`)[0]
alert(setHour)
var setMinute = url.substring(url.indexOf('minute=') + 7).split(`][second`)[0]
alert(setMinute)
var setSecond = url.substring(url.indexOf('second=') + 7).split(`][millisecond`)[0]
alert(setSecond)
var setMillisecond = url.substring(url.indexOf('millisecond=') + 12).split(`&p0=2966`)[0]
alert(setMillisecond)
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
