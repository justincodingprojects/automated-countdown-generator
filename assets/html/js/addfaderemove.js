var container = document.getElementById('demo1')
var timesClicked = 0
document.addEventListener('click', function( event ) {
  if (container !== event.target && !container.contains(event.target)) {    
    timesClicked++
    if(timesClicked == 5) {
    alert("you pressed it five times")
      timesClicked = 0
    }
  }
})
