if(window.location.href.indexOf("?month=") != -1 &&
   window.location.href.indexOf("&day=") != -1 &&
   window.location.href.indexOf("&year=") != -1 &&
   window.location.href.indexOf("&hour=") != -1 && 
   window.location.href.indexOf("&minute=") != -1 && 
   window.location.href.indexOf("&second=") != -1 &&
   window.location.href.indexOf("&message=") != -1) {
// Set the date we're counting down to
var countDownDate = new Date(window.location.href.substring(window.location.href.indexOf('month=') + 6).split(`&day=`)[0] + 
" " + window.location.href.substring(window.location.href.indexOf('day=') + 4).split(`&year=`)[0] + 
" " + window.location.href.substring(window.location.href.indexOf('year=') + 5).split(`&hour=`)[0] + 
" " + window.location.href.substring(window.location.href.indexOf('hour=') + 5).split(`&minute=`)[0] + 
":" + window.location.href.substring(window.location.href.indexOf('minute=') + 7).split(`&second=`)[0] + 
":" + window.location.href.substring(window.location.href.indexOf('second=') + 7).split(`&millisecond=`)[0] + 
"." + window.location.href.substring(window.location.href.indexOf('millisecond=') + 12).split(`&message=`)[0]).getTime();
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
   if(decodeURIComponent(window.location.href.substring(window.location.href.indexOf('message=') + 8)) !== "") {
  document.getElementById("title").innerHTML = decodeURIComponent(window.location.href.substring(window.location.href.indexOf('message=') + 8))
   } else {
      document.getElementById("title").innerHTML = "Countdown Timer"
   }
  if(decodeURIComponent(window.location.href.substring(window.location.href.indexOf('message=') + 8)) != "") {
    document.title = decodeURIComponent(window.location.href.substring(window.location.href.indexOf('message=') + 8)) + " - Auto. Countdown Generator | Justin Coding Projects"
  }
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  if(seconds < 10) {
    seconds = "0" + seconds.toString()
  }
  if(days < 10) {
    days = "0" + days.toString()
  }
  if(hours < 10) {
    hours = "0" + hours.toString()
  }
  if(minutes < 10) {
    minutes = "0" + minutes.toString()
  }
   if(days + "d " + hours + "h "
  + minutes + "m " + seconds + "s" != document.getElementById("demo").innerHTML || days + "d " + hours + "h "
  + minutes + "m " + seconds + "s" != "Countdown Ended") {
      var pElement = document.createElement("p")
      pElement.id = "demo1"
      pElement.innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s"
      document.body.appendChild(pElement)
      $("#demo").fadeOut(500)
      $("#demo1").fadeIn(500)
      setTimeout(function() {
      document.body.removeChild(document.getElementById("demo"))
      document.getElementById("demo1").id = "demo"
      pElement = undefined
      }, 500)
   }
    if(decodeURIComponent(window.location.href.substring(window.location.href.indexOf('message=') + 8).split(`]&font=`)[0]) == "") {
    document.title = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s" + " - Auto. Countdown Generator | Justin Coding Projects"
    }
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Countdown Ended";
  }
}, 50);
} else {
 alert("Incorrect parameters.")
}
