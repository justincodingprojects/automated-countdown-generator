setTimeout(function() {
    onMaintenance.isOn = true;
      if(top.location != self.location) {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = './css/style-iframe.css';
        link.media = 'all';
        head.appendChild(link);
      } else {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = './css/style.css';
        link.media = 'all';
        head.appendChild(link);
      }
    }, 50)
