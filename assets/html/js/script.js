var number = 0

setInterval(function() {
  number = ++number
  document.getElementById("urmom").innerHTML = number.toString()
}, 1000)
