setTimeout(function() {
    onMaintenance.isOn = true;
      if(top.location != self.location) {
        document.getElementById("title").fontSize = "50px"
        document.getElementById("demo").fontSize = "50px"
        document.getElementById("demo").top = "63%"
        document.getElementById("demo").transform = "translate(-50%, -63%)"
      }
    }, 50)
