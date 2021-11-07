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
    if(document.getElementsByClassName("topnav")[0].style.display !== "" || document.getElementsByClassName("topnav")[0].style.display !== "block") {
    document.getElementsByClassName("topnav")[0].style.display == "block"
}
  } else if(bool == false) {
    if(document.getElementsByClassName("topnav")[0].style.display == "block" || document.getElementsByClassName("topnav")[0].style.display == "") {
      document.getElementsByClassName("topnav")[0].style.display == "none"
    }
  }
}
