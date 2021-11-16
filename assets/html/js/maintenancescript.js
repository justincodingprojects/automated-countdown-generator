/* This goes to check if there's a maintenance and if there is, set a registered value */
onMaintenance = {
  aInternal: 10,
  aListener: function(val) {},
  set isOn(val) {
    this.aInternal = val;
    this.aListener(val);
  },
  get isOn() {
    return this.aInternal;
  },
  registerListener: function(listener) {
    this.aListener = listener;
  }
}

onMaintenance.registerListener(function(val) {
  setMaintenanceBanner(onMaintenance.isOn)
});

function setMaintenanceBanner(bool) {
  if(bool == true) {
    if(document.getElementsByClassName("topnav")[0] == undefined) {
setTimeout(function() {
var div = document.createElement("div")
div.setAttribute("class", "topnav")
document.body.appendChild(div)
var a = document.createElement("a")
a.setAttribute("id", "mainbanner")
a.setAttribute("class", "active")
document.getElementsByClassName("topnav")[0].appendChild(a)
document.getElementById("mainbanner").appendChild(/*document.createTextNode("This website is currently in ongoing maintenance, expect to see some small design changes over the days.")*/document.createTextNode("If you're seeing any weird text below the countdown or this banner going weird, I'm working on the site."))
}, 50)
}
  } else if(bool == false) {
    if(document.getElementsByClassName("topnav")[0] !== undefined) {
      document.body.removeChild(document.getElementsByClassName("topnav")[0])
    }
  }
}
