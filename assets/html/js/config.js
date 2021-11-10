setTimeout(function() {
    onMaintenance.isOn = true;
    alert("Sorry, we are currently undergoing maintenance!")
    if(prompt("If you are the owner of this website to see how it's going, enter the password here else, just skip:")!==atob("MzMyMDI3Mjkw")) {
       window.location.href = "./maintenance/sitebroken.html"
    }
    }, 50)
