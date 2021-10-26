var number = parseInt(document.getElementById("urmom").innerHTML)

setInterval(function() {
  number = number++
  document.getElementById("urmom").innerHTML = number.toString()
}, 1000)
