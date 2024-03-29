var urlParams = window.location.href
Date.prototype.today = function () {
    return (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "/" + ((this.getDate() < 10) ? "0" : "") + this.getDate() + "/" + this.getFullYear();
}

Date.prototype.timeNow = function () {
    return ((this.getHours() < 10) ? "0" : "") + this.getHours() + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes() + ":" + ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();
}
if (urlParams.indexOf("?month=") != -1 &&
    urlParams.indexOf("&day=") != -1 &&
    urlParams.indexOf("&year=") != -1 &&
    urlParams.indexOf("&hour=") != -1 &&
    urlParams.indexOf("&minute=") != -1 &&
    urlParams.indexOf("&second=") != -1 &&
    urlParams.indexOf("&message=") != -1) {
    var countDownDate = new Date(urlParams.substring(urlParams.indexOf('month=') + 6).split(`&day=`)[0] +
        " " + urlParams.substring(urlParams.indexOf('day=') + 4).split(`&year=`)[0] +
        " " + urlParams.substring(urlParams.indexOf('year=') + 5).split(`&hour=`)[0] +
        " " + urlParams.substring(urlParams.indexOf('hour=') + 5).split(`&minute=`)[0] +
        ":" + urlParams.substring(urlParams.indexOf('minute=') + 7).split(`&second=`)[0] +
        ":" + urlParams.substring(urlParams.indexOf('second=') + 7).split(`&millisecond=`)[0] +
        "." + urlParams.substring(urlParams.indexOf('millisecond=') + 12).split(`&message=`)[0]).getTime();
    let wakeLock = null;
    if ("wakeLock" in navigator) {
        async function start() {
            wakeLock = await navigator.wakeLock.request('screen');
        }
        document.addEventListener('visibilitychange', async () => {
            if (wakeLock !== null && document.visibilityState === 'visible') {
                wakeLock = await navigator.wakeLock.request('screen');
            }
        });
        start();
    }
    var egg = new Egg("esc", function () {
        window.top.document.body.removeChild(window.parent.document.getElementById("iframeModal"))
    }).listen();
    var zoomed = false
    var locked = false
    var egg2 = new Egg("m", function () {
        if (!zoomed) {
            if (!locked) {
                locked = true
                zoomed = true
                $(".topnav").animate({ top: "-10%" })
                $(".footer").animate({ top: "110%" })
                $("#title").animate({ fontSize: "750%", top: "40%" })
                $("#demo").animate({ fontSize: "750%", top: "65%" }, "", () => locked = false)
            }
        } else {
            if (!locked) {
                locked = true
                zoomed = false
                $(".topnav").animate({ top: "1.3%" })
                $(".footer").animate({ top: "93.3%" })
                $("#title").animate({ fontSize: "375%", top: "45%" })
                $("#demo").animate({ fontSize: "375%", top: "58%" }, "", () => locked = false)
            }
        }
    }).listen()
    
    var x = setInterval(function () {
        var now = ServerDate.now()

        var distance = countDownDate - now;
        if (decodeURIComponent(urlParams.substring(urlParams.indexOf('message=') + 8)) !== "") {
            if (decodeURIComponent(urlParams.substring(urlParams.indexOf('message=') + 8)) !== document.getElementById("title").innerHTML) {
                document.getElementById("title").innerHTML = decodeURIComponent(urlParams.substring(urlParams.indexOf('message=') + 8))
            }
        } else {
            if ("Countdown Timer" !== document.getElementById("title").innerHTML) {
                document.getElementById("title").innerHTML = "Countdown Timer"
            }
        }
        if (decodeURIComponent(urlParams.substring(urlParams.indexOf('message=') + 8)) != "") {
            document.title = decodeURIComponent(urlParams.substring(urlParams.indexOf('message=') + 8)) + " - Auto. Countdown Generator | Justin Coding Projects"
        }
        document.getElementById("footera").innerHTML = "Timer until " + new Date(urlParams.substring(urlParams.indexOf('month=') + 6).split(`&day=`)[0] +
            " " + urlParams.substring(urlParams.indexOf('day=') + 4).split(`&year=`)[0] +
            " " + urlParams.substring(urlParams.indexOf('year=') + 5).split(`&hour=`)[0]).toLocaleDateString("default", {
                weekday: 'long'
            }) + ", " + new Date(urlParams.substring(urlParams.indexOf('month=') + 6).split(`&day=`)[0] +
                " " + urlParams.substring(urlParams.indexOf('day=') + 4).split(`&year=`)[0] +
                " " + urlParams.substring(urlParams.indexOf('year=') + 5).split(`&hour=`)[0]).toLocaleDateString("default", {
                    month: 'long'
                }) + " " + new Date(urlParams.substring(urlParams.indexOf('month=') + 6).split(`&day=`)[0] +
                    " " + urlParams.substring(urlParams.indexOf('day=') + 4).split(`&year=`)[0] +
                    " " + urlParams.substring(urlParams.indexOf('year=') + 5).split(`&hour=`)[0]).getDate() + ", " + new Date(urlParams.substring(urlParams.indexOf('month=') + 6).split(`&day=`)[0] +
                        " " + urlParams.substring(urlParams.indexOf('day=') + 4).split(`&year=`)[0] +
                        " " + urlParams.substring(urlParams.indexOf('year=') + 5).split(`&hour=`)[0]).getFullYear() + " at " + ((parseInt(urlParams.substring(urlParams.indexOf('hour=') + 5).split(`&minute=`)[0]) + 11) % 12 + 1) +
            ":" + urlParams.substring(urlParams.indexOf('minute=') + 7).split(`&second=`)[0] + " " + ((parseInt(urlParams.substring(urlParams.indexOf('hour=') + 5).split(`&minute=`)[0]) >= 12) ? "PM" : "AM");
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (seconds < 10) {
            seconds = "0" + seconds.toString()
        }
        if (days < 10) {
            days = "0" + days.toString()
        }
        if (hours < 10) {
            hours = "0" + hours.toString()
        }
        if (minutes < 10) {
            minutes = "0" + minutes.toString()
        }
        if (distance > 0) {
            if (days + "d " + hours + "h " +
                minutes + "m " + seconds + "s" != document.getElementById("demo").innerHTML) {
                document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s"
            }
        }
        if (decodeURIComponent(urlParams.substring(urlParams.indexOf('message=') + 8)) == "") {
            document.title = days + "d " + hours + "h " +
                minutes + "m " + seconds + "s" + " - Auto. Countdown Generator | Justin Coding Projects"
        }
        if (distance < 0) {
            clearInterval(x);
            document.head.removeChild(document.getElementById("ServerDate"))
            setTimeout(function () {
                document.getElementById("demo").innerHTML = "Countdown Ended"
                if ("wakeLock" in navigator) {
                    wakeLock.release()
                        .then(() => {
                            wakeLock = null;
                        });
                }

            }, 250)
        }
    }, 50);
} else {
    alert("Incorrect parameters.")
}
