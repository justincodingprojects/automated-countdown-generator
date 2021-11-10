setTimeout(function() {
    onMaintenance.isOn = true;
    alert("Sorry, we are currently undergoing maintenance!")
    if(prompt("If you are the owner of this website to see how it's going, enter the password here else, just skip:")!==atob("MzMyMDI3Mjkw")) {
        var timeriframe = document.createElement("iframe")
timeriframe.id="maintenanceiframe"
timeriframe.width = screen.width
timeriframe.height = screen.height
timeriframe.src = "./maintenance/sitebroken.html"
timeriframe.style.position = "fixed"
timeriframe.style.top = 0
timeriframe.style.right = 0
timeriframe.style.float = "right"
timeriframe.style.zIndex = "9999"
timeriframe.frameBorder = 0;
document.body.appendChild(timeriframe)
    }
    }, 50)
