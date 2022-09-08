var count = 0
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
    if (bool == true) {
        if (document.getElementsByClassName("topnav")[0] == undefined) {
            setTimeout(function() {
                var div = document.createElement("div")
                div.setAttribute("class", "topnav")
                document.body.appendChild(div)
                var a = document.createElement("a")
                a.setAttribute("id", "mainbanner")
                a.setAttribute("class", "active")
                document.getElementsByClassName("topnav")[0].appendChild(a)
                document.getElementById("mainbanner").innerHTML = "This website is no longer in maintenance because the main intro screen has its bugs fixed, although the main countdown page could be bugged."
            }, 50)
        }
    } else if (bool == false) {
        if (document.getElementsByClassName("topnav")[0] !== undefined) {
            document.body.removeChild(document.getElementsByClassName("topnav")[0])
        }
    }
}
