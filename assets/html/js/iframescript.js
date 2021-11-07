var isinIFrame = top.location != self.location
  if(isinIFrame == true) {
    document.getElementById("title").style = "text-align: center; font-size: 275%; margin-top: 0px; font-family: 'Roboto', sans-serif; color: white; position: absolute; top: 40%; left: 50%; margin-right: -50%; transform: translate(-40%, -50%);"
    document.getElementById("demo").style = "text-align: center; font-size: 275%; margin-top: 0px; font-family: 'Roboto', sans-serif; color: white; position: absolute; top: 65%; left: 50%; margin-right: -50%; transform: translate(-50%, -65%);"
    setTimeout(function() {
    if(document.getElementsByClassName("topnav")[0] !== undefined) {
    document.getElementById("mainbanner").style.fontSize = "10px"
    }
    }, 100)
  }
