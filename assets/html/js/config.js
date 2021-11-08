setTimeout(function() {
    onMaintenance.isOn = true;
      if(top.location != self.location) {
        document.getElementById("title").fontSize = "50px"
        document.getElementById("demo").fontSize = "50px"
      }
    }, 50)
