function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}    
docReady(function() {
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
    const fetchSampleImplementation = async () => {
        const requestDate = new Date();

        var xmlHttp = new XMLHttpRequest()
        xmlHttp.open('HEAD', window.location.href.toString(), false);
        xmlHttp.setRequestHeader("Content-Type", "text/html");
        xmlHttp.send('');
        var statusText = xmlHttp.status
        var ok = (statusText == 200) ? true : false

        if (!ok) {
            throw new Error(`Bad date sample from server: ${statusText}`);
        }

        return {
            requestDate,
            responseDate: new Date(),
            serverDate: new Date(xmlHttp.getResponseHeader("Date")),
        };
    };

    const getServerDate = async (
        { fetchSample } = { fetchSample: fetchSampleImplementation }
    ) => {
        let best = { uncertainty: Number.MAX_VALUE };

        // Fetch 10 samples to increase the chance of getting one with low
        // uncertainty.
        for (let index = 0; index < 10; index++) {
            try {
                const { requestDate, responseDate, serverDate } = await fetchSample();

                // We don't get milliseconds back from the Date header so there's
                // uncertainty of at least half a second in either direction.
                const uncertainty = (responseDate - requestDate) / 2 + 500;

                if (uncertainty < best.uncertainty) {
                    const date = new Date(serverDate.getTime() + 500);

                    best = {
                        date,
                        offset: date - responseDate,
                        uncertainty,
                    };
                }
            } catch (exception) {
                console.warn(exception);
            }
        }

        return best;
    };
    if ("wakeLock" in navigator) {
        let wakeLock = null;
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
    let lastOffsetTime = {};

    const synchronize = async () => {
        lastOffsetTime = await getServerDate();
    };
    synchronize();
    setInterval(synchronize, 1000);
    var x = setInterval(function () {
        const { date, offset, uncertainty } = lastOffsetTime;
        var now = new Date(Date.now() + offset).getTime()

        var distance = countDownDate - now;
        if (decodeURIComponent(urlParams.substring(urlParams.indexOf('message=') + 8)) !== document.getElementById("title").innerHTML) {
            if (decodeURIComponent(urlParams.substring(urlParams.indexOf('message=') + 8)) !== document.title.innerHTML) {
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
            setTimeout(function () {
                document.getElementById("demo").innerHTML = "Countdown Ended"
                wakeLock.release()
                    .then(() => {
                        wakeLock = null;
                    });

            }, 250)
        }
    }, 50);
} else {
    alert("Incorrect parameters.")
}
});