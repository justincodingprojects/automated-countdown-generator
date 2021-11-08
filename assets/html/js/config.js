setTimeout(function() {
    onMaintenance.isOn = true;
      if(top.location != self.location) {
        document.getElementById("title").style = "text-align: center; font-size: 20px; margin-top: 0px; font-family: 'Roboto', sans-serif; color: white; position: absolute; top: 40%; left: 50%; margin-right: -50%; transform: translate(-40%, -50%);"
        document.getElementById("demo").style = "text-align: center; font-size: 20px; margin-top: 0px; font-family: 'Roboto', sans-serif; color: white; position: absolute; top: 65%; left: 50%; margin-right: -50%; transform: translate(-50%, -65%);"
      }
    }, 50)
