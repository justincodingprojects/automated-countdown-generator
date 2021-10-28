var url = window.location.href;
var setYear = url.substring(url.indexOf('year=') + 5).split(`][month`)[0];
var setMonth = url.substring(url.indexOf('month=') + 6).split(`][day`)[0]
var setDay = url.substring(url.indexOf('day=') + 4).split(`]T[hour`)[0]
var setHour = url.substring(url.indexOf('hour=') + 5).split(`][minute`)[0]
var setMinute = url.substring(url.indexOf('minute=') + 7).split(`][second`)[0]
var setSecond = url.substring(url.indexOf('second=') + 7).split(`][millisecond`)[0]
var setMillisecond = url.substring(url.indexOf('millisecond=') + 12).split(`]&p0=2966`)[0]
localStorage.setItem("tempNumberYear", setYear)
localStorage.setItem("tempNumberMonth", setMonth)
localStorage.setItem("tempNumberDay", setDay)
localStorage.setItem("tempNumberHour", setHour)
localStorage.setItem("tempNumberMinute", setMinute)
localStorage.setItem("tempNumberSecond", setSecond)
localStorage.setItem("tempNumberMillisecond", setMillisecond)

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
