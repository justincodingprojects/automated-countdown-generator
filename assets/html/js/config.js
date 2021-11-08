setTimeout(function() {
    onMaintenance.isOn = true;
      if(top.location != self.location) {
        var link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = './css/style-iframe.css';
        document.head.appendChild(link);
      } else {
        var link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = './css/style.css';
        document.head.appendChild(link);
      }
    }, 50)
