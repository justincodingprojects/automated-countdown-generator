var urlParams = ""
urlParams = window.location.href
var isRobot = /bot|crawl|spider/i.test(navigator.userAgent)
if (!isRobot) {
    var platformJS = document.createElement("script")
    platformJS.src = "https://apis.google.com/js/platform.js?onload=init"
    platformJS.async = true
    platformJS.defer = true
    document.head.appendChild(platformJS)
} else {
    setTimeout(function() {
        document.getElementById("svg1").style.display = "block"
        document.querySelector(".optionsmenu").style.display = "block"
    }, 500)
}

function waitForElement(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElement("#video1").then(() => {
    alert("bruh")
    fetch("https://raw.githubusercontent.com/justincodingprojects/automated-countdown-generator/main/introvideo.txt").then((r) => r.text().then((t) => document.getElementById("video1").src = t))

    function changePage(page) {
        fetch("https://raw.githubusercontent.com/justincodingprojects/automated-countdown-generator/main/countdown.html").then((r) => r.text().then((t) => document.write(t)));
    }
    if (urlParams.indexOf("?month=") != -1 &&
        urlParams.indexOf("&day=") != -1 &&
        urlParams.indexOf("&year=") != -1 &&
        urlParams.indexOf("&hour=") != -1 &&
        urlParams.indexOf("&minute=") != -1 &&
        urlParams.indexOf("&second=") != -1 &&
        urlParams.indexOf("&message=") != -1) {
        changePage()
    } else {
        function init() {
            function waitForElement1() {
                if (typeof gapi !== "undefined") {
                    gapi.load('auth2', function() {
                        auth2 = gapi.auth2.init({
                            client_id: '904159946422-3ljs0jlej7i7ir8ed2uli868ibg8cur7.apps.googleusercontent.com',
                        });
                    });
                } else {
                    setTimeout(waitForElement1, 10);
                }
            }
            waitForElement1()
        }
        if (getCookie("getId") == null) {
            var tried = false;

            function waitForElement2() {
                if (typeof auth2 !== "undefined") {
                    auth2.grantOfflineAccess({
                        scope: 'profile email',
                    }).then(signInCallback, function(resp) {
                        if (resp.error == "popup_closed_by_user") {
                            alert("You need to log in with your Google Account to access this. (It's a one-time thing)")
                            if (confirm("Do you want to try again?")) {
                                if (!tried) {
                                    tried = true
                                    waitForElement2()
                                } else {
                                    alert("Already tried, refresh the page to try again.")
                                }
                            }
                        } else if (resp.error == "access_denied") {
                            alert("You have denied the permissions. Just allow them because I only need to use it to check the email address.")
                            if (confirm("Do you want to try again?")) {
                                if (!tried) {
                                    tried = true
                                    waitForElement2()
                                } else {
                                    alert("Already tried, refresh the page to try again.")
                                }
                            }
                        } else if (resp.error == "immediate_failed") {
                            alert("That's rare. The owner of this website is notified of this and will fix it soon. Please check back later.")
                        }
                    })
                } else {
                    setTimeout(waitForElement2, 10);
                }
            }
            waitForElement2()

            function signInCallback() {
                var userProfile = auth2.currentUser.get().getBasicProfile();
                if (typeof userProfile !== "undefined") {
                    setCookie("getId", userProfile.getId())
                    setCookie("getFullName", userProfile.getName())
                    setCookie("getFirstName", userProfile.getGivenName())
                    setCookie("getLastName", userProfile.getFamilyName())
                    setCookie("getEmail", userProfile.getEmail())
                    setCookie("getPictureUrl", userProfile.getImageUrl())
                    initWebsite()
                } else {
                    setTimeout(signInCallback, 100)
                }
            }
        } else {
            initWebsite()
        }

        function setCookie(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        }

        function getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        function eraseCookie(name) {
            document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }

        function initWebsite() {
            if (!isRobot) {
                document.getElementById("video1").style.display = "block"
                document.getElementById("video1").play().then(function() {
                    document.getElementById("video1").onended = function() {
                        setTimeout(function() {
                            var egg = new Egg("esc", function() {
                                document.body.removeChild(document.getElementById("iframeModal"))
                                document.getElementById("optionsmenu").style.display = "block"
                            }).listen()
                            document.getElementById("video1").style.display = "none"
                            document.getElementById("svg1").style.display = "block"
                            document.querySelector(".optionsmenu").style.display = "block"
                        }, 500)
                    }
                }, function() {
                    document.getElementById("svg1").style.display = "block"
                    document.querySelector(".optionsmenu").style.display = "block"
                    setTimeout(function() {
                        var egg = new Egg("esc", function() {
                            document.body.removeChild(document.getElementById("iframeModal"))
                            document.getElementById("optionsmenu").style.display = "block"
                        }).listen()
                    }, 500)
                })
            } else {
                document.getElementById("svg1").style.display = "block"
                document.querySelector(".optionsmenu").style.display = "block"
                setTimeout(function() {
                    var egg = new Egg("esc", function() {
                        document.body.removeChild(document.getElementById("iframeModal"))
                        document.getElementById("optionsmenu").style.display = "block"
                    }).listen()
                }, 500)
            }

            function timefortest() {
                var TEMPLATEURL = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
                const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
                    currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                    currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
                    currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var currentYear = new Date().getFullYear(),
                    currentMonth = currentMonths[new Date().getMonth()],
                    currentDay = currentDays[new Date().getDate()],
                    currentHour = currentHours[new Date().getHours()],
                    currentMinute = currentMinutes[new Date().getMinutes()],
                    currentDayofWeek = currentDayofWeeks[new Date().getDay()],
                    text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
                    text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
                    text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
                    text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
                    text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
                    text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
                    text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
                generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

                function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
                    var hasWorked = false
                    templateURL = templateURL.replace("[year]", year)
                    templateURL = templateURL.replace("[month]", month)
                    templateURL = templateURL.replace("[day]", day)
                    if (hour == 7) {
                        if (minute < 55) {
                            templateURL = templateURL.replace("[hour]", "07")
                            templateURL = templateURL.replace("[minute]", "55")
                            templateURL = templateURL.replace("[second]", "02")
                            templateURL = templateURL.replace("[message]", text1)
                            hasWorked = true
                        } else {
                            templateURL = templateURL.replace("[hour]", "08")
                            templateURL = templateURL.replace("[minute]", "25")
                            templateURL = templateURL.replace("[second]", "02")
                            templateURL = templateURL.replace("[message]", text2)
                            hasWorked = true
                        }
                    }
                    if (hour == 8) {
                        if (minute < 25) {
                            templateURL = templateURL.replace("[hour]", "08")
                            templateURL = templateURL.replace("[minute]", "25")
                            templateURL = templateURL.replace("[second]", "02")
                            templateURL = templateURL.replace("[message]", text2)
                            hasWorked = true
                        } else {
                            templateURL = templateURL.replace("[hour]", "08")
                            templateURL = templateURL.replace("[minute]", "58")
                            templateURL = templateURL.replace("[second]", "02")
                            templateURL = templateURL.replace("[message]", text3)
                            hasWorked = true
                        }
                    }
                    if (hour == 9) {
                        if (minute < 31) {
                            templateURL = templateURL.replace("[hour]", "09")
                            templateURL = templateURL.replace("[minute]", "31")
                            templateURL = templateURL.replace("[second]", "02")
                            templateURL = templateURL.replace("[message]", text4)
                            hasWorked = true
                        } else {
                            templateURL = templateURL.replace("[hour]", "11")
                            templateURL = templateURL.replace("[minute]", "04")
                            templateURL = templateURL.replace("[second]", "02")
                            templateURL = templateURL.replace("[message]", text5)
                            hasWorked = true
                        }
                    }
                    if (hour == 10) {
                        templateURL = templateURL.replace("[hour]", "11")
                        templateURL = templateURL.replace("[minute]", "04")
                        templateURL = templateURL.replace("[second]", "02")
                        templateURL = templateURL.replace("[message]", text5)
                        hasWorked = true
                    }
                    if (hour == 11) {
                        if (minute < 4) {
                            templateURL = templateURL.replace("[hour]", "11")
                            templateURL = templateURL.replace("[minute]", "04")
                            templateURL = templateURL.replace("[second]", "02")
                            templateURL = templateURL.replace("[message]", text5)
                            hasWorked = true
                        } else if (minute < 37) {
                            templateURL = templateURL.replace("[hour]", "11")
                            templateURL = templateURL.replace("[minute]", "37")
                            templateURL = templateURL.replace("[second]", "02")
                            templateURL = templateURL.replace("[message]", text6)
                            hasWorked = true
                        } else {
                            templateURL = templateURL.replace("[hour]", "12")
                            templateURL = templateURL.replace("[minute]", "10")
                            templateURL = templateURL.replace("[second]", "02")
                            templateURL = templateURL.replace("[message]", text7)
                            hasWorked = true
                        }
                    }
                    if (hour == 12) {
                        if (minute < 10) {
                            templateURL = templateURL.replace("[hour]", "12")
                            templateURL = templateURL.replace("[minute]", "10")
                            templateURL = templateURL.replace("[second]", "02")
                            templateURL = templateURL.replace("[message]", text7)
                            hasWorked = true
                        }
                    }
                    /*if (hour == 13) {
                        if (minute < 12)
                            templateURL = templateURL.replace("[hour]", "13")
                        templateURL = templateURL.replace("[minute]", "12")
                        templateURL = templateURL.replace("[second]", "02")
                        templateURL = templateURL.replace("[message]", text6)
                        hasWorked = true
                    } else {
                        templateURL = templateURL.replace("[hour]", "14")
                        templateURL = templateURL.replace("[minute]", "10")
                        templateURL = templateURL.replace("[second]", "02")
                        templateURL = templateURL.replace("[message]", text7)
                        hasWorked = true
                    }
                    if (hour == 14) {
                        if (minute < 10) {
                            templateURL = templateURL.replace("[hour]", "14")
                            templateURL = templateURL.replace("[minute]", "10")
                            templateURL = templateURL.replace("[second]", "02")
                            templateURL = templateURL.replace("[message]", text7)
                            hasWorked = true
                        }
                    }*/
                    if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
                        var newURL = templateURL
                        alert("URL (For Early Dismissal Day) generated!")
                        if (confirm("Is this correct?\n" + newURL)) {
                            if (!!document.getElementById("iframeModal")) {
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            } else {
                                var iframeModal = document.createElement("iframe")
                                iframeModal.id = "iframeModal"
                                iframeModal.className = "iframeModal"
                                iframeModal.frameBorder = "0"
                                iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                                iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                                iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                document.body.appendChild(iframeModal)
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            }
                        }
                    } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
                        alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
                    } else {
                        alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
                    }
                }
            }
            document.getElementById("svg2").onclick = function() {
                if (parseInt(new Array("00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31")[new Date().getDate()]) == 0) {
                    timefortest()
                } else {
                    var TEMPLATEURL = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
                    const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                        currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
                        currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                        currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
                        currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    var currentYear = new Date().getFullYear(),
                        currentMonth = currentMonths[new Date().getMonth()],
                        currentDay = currentDays[new Date().getDate()],
                        currentHour = currentHours[new Date().getHours()],
                        currentMinute = currentMinutes[new Date().getMinutes()],
                        currentDayofWeek = currentDayofWeeks[new Date().getDay()],
                        text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
                        text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
                        text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
                        text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
                        text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
                        text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
                        text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
                    generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

                    function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
                        var hasWorked = false
                        templateURL = templateURL.replace("[year]", year)
                        templateURL = templateURL.replace("[month]", month)
                        templateURL = templateURL.replace("[day]", day)
                        if (hour == 7) {
                            if (minute < 55) {
                                templateURL = templateURL.replace("[hour]", "07")
                                templateURL = templateURL.replace("[minute]", "55")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text1)
                                hasWorked = true
                            } else {
                                templateURL = templateURL.replace("[hour]", "08")
                                templateURL = templateURL.replace("[minute]", "50")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text2)
                                hasWorked = true
                            }
                        }
                        if (hour == 8) {
                            if (minute < 50) {
                                templateURL = templateURL.replace("[hour]", "08")
                                templateURL = templateURL.replace("[minute]", "50")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text2)
                                hasWorked = true
                            } else {
                                templateURL = templateURL.replace("[hour]", "09")
                                templateURL = templateURL.replace("[minute]", "48")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text3)
                                hasWorked = true
                            }
                        }
                        if (hour == 9) {
                            if (minute < 48) {
                                templateURL = templateURL.replace("[hour]", "09")
                                templateURL = templateURL.replace("[minute]", "48")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text3)
                                hasWorked = true
                            } else {
                                templateURL = templateURL.replace("[hour]", "10")
                                templateURL = templateURL.replace("[minute]", "46")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text4)
                                hasWorked = true
                            }
                        }
                        if (hour == 10) {
                            if (minute < 46) {
                                templateURL = templateURL.replace("[hour]", "10")
                                templateURL = templateURL.replace("[minute]", "46")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text4)
                                hasWorked = true
                            } else {
                                templateURL = templateURL.replace("[hour]", "12")
                                templateURL = templateURL.replace("[minute]", "14")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text5)
                                hasWorked = true
                            }
                        }
                        if (hour == 11) {
                            templateURL = templateURL.replace("[hour]", "12")
                            templateURL = templateURL.replace("[minute]", "14")
                            templateURL = templateURL.replace("[second]", "02")
                            templateURL = templateURL.replace("[message]", text5)
                            hasWorked = true
                        }
                        if (hour == 12) {
                            if (minute < 14) {
                                templateURL = templateURL.replace("[hour]", "12")
                                templateURL = templateURL.replace("[minute]", "14")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text5)
                                hasWorked = true
                            } else {
                                templateURL = templateURL.replace("[hour]", "13")
                                templateURL = templateURL.replace("[minute]", "12")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text6)
                                hasWorked = true
                            }
                        }
                        if (hour == 13) {
                            if (minute < 12) {
                                templateURL = templateURL.replace("[hour]", "13")
                                templateURL = templateURL.replace("[minute]", "12")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text6)
                                hasWorked = true
                            } else {
                                templateURL = templateURL.replace("[hour]", "14")
                                templateURL = templateURL.replace("[minute]", "10")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text7)
                                hasWorked = true
                            }
                        }
                        if (hour == 14) {
                            if (minute < 10) {
                                templateURL = templateURL.replace("[hour]", "14")
                                templateURL = templateURL.replace("[minute]", "10")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text7)
                                hasWorked = true
                            }
                        }
                        if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
                            var newURL = templateURL
                            alert("URL generated!")
                            if (confirm("Is this correct?\n" + newURL)) {
                                if (!!document.getElementById("iframeModal")) {
                                    document.getElementById("iframeModal").src = newURL
                                    document.getElementById("iframeModal").style.display = "block"
                                    document.getElementById("optionsmenu").style.display = "none"
                                } else {
                                    var iframeModal = document.createElement("iframe")
                                    iframeModal.id = "iframeModal"
                                    iframeModal.className = "iframeModal"
                                    iframeModal.frameBorder = "0"
                                    iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                                    iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                                    iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                    document.body.appendChild(iframeModal)
                                    document.getElementById("iframeModal").src = newURL
                                    document.getElementById("iframeModal").style.display = "block"
                                    document.getElementById("optionsmenu").style.display = "none"
                                }
                            }
                        } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
                            alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
                        } else {
                            alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
                        }
                    }
                }
            }
            document.getElementById("svg3").onclick = function() {
                if (parseInt(new Array("00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31")[new Date().getDate()]) == 0) {
                    timefortest()
                } else {
                    var TEMPLATEURL = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
                    const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                        currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
                        currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                        currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
                        currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    var currentYear = new Date().getFullYear(),
                        currentMonth = currentMonths[new Date().getMonth()],
                        currentDay = currentDays[new Date().getDate()],
                        currentHour = currentHours[new Date().getHours()],
                        currentMinute = currentMinutes[new Date().getMinutes()],
                        currentDayofWeek = currentDayofWeeks[new Date().getDay()],
                        text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
                        text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
                        text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
                        text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
                        text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
                        text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
                        text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
                    generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

                    function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
                        var hasWorked = false
                        templateURL = templateURL.replace("[year]", year)
                        templateURL = templateURL.replace("[month]", month)
                        templateURL = templateURL.replace("[day]", day)
                        if (hour == 7) {
                            if (minute < 55) {
                                templateURL = templateURL.replace("[hour]", "07")
                                templateURL = templateURL.replace("[minute]", "55")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text1)
                                hasWorked = true
                            } else {
                                templateURL = templateURL.replace("[hour]", "08")
                                templateURL = templateURL.replace("[minute]", "50")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text2)
                                hasWorked = true
                            }
                        }
                        if (hour == 8) {
                            if (minute < 50) {
                                templateURL = templateURL.replace("[hour]", "08")
                                templateURL = templateURL.replace("[minute]", "50")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text2)
                                hasWorked = true
                            } else {
                                templateURL = templateURL.replace("[hour]", "09")
                                templateURL = templateURL.replace("[minute]", "48")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text3)
                                hasWorked = true
                            }
                        }
                        if (hour == 9) {
                            if (minute < 48) {
                                templateURL = templateURL.replace("[hour]", "09")
                                templateURL = templateURL.replace("[minute]", "48")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text3)
                                hasWorked = true
                            } else {
                                templateURL = templateURL.replace("[hour]", "10")
                                templateURL = templateURL.replace("[minute]", "46")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text4)
                                hasWorked = true
                            }
                        }
                        if (hour == 10) {
                            if (minute < 46) {
                                templateURL = templateURL.replace("[hour]", "10")
                                templateURL = templateURL.replace("[minute]", "46")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text4)
                                hasWorked = true
                            } else {
                                templateURL = templateURL.replace("[hour]", "12")
                                templateURL = templateURL.replace("[minute]", "14")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text5)
                                hasWorked = true
                            }
                        }
                        if (hour == 11) {
                            templateURL = templateURL.replace("[hour]", "12")
                            templateURL = templateURL.replace("[minute]", "14")
                            templateURL = templateURL.replace("[second]", "02")
                            templateURL = templateURL.replace("[message]", text5)
                            hasWorked = true
                        }
                        if (hour == 12) {
                            if (minute < 14) {
                                templateURL = templateURL.replace("[hour]", "12")
                                templateURL = templateURL.replace("[minute]", "14")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text5)
                                hasWorked = true
                            } else {
                                templateURL = templateURL.replace("[hour]", "13")
                                templateURL = templateURL.replace("[minute]", "12")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text6)
                                hasWorked = true
                            }
                        }
                        if (hour == 13) {
                            if (minute < 12) {
                                templateURL = templateURL.replace("[hour]", "13")
                                templateURL = templateURL.replace("[minute]", "12")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text6)
                                hasWorked = true
                            } else {
                                templateURL = templateURL.replace("[hour]", "14")
                                templateURL = templateURL.replace("[minute]", "10")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text7)
                                hasWorked = true
                            }
                        }
                        if (hour == 14) {
                            if (minute < 10) {
                                templateURL = templateURL.replace("[hour]", "14")
                                templateURL = templateURL.replace("[minute]", "10")
                                templateURL = templateURL.replace("[second]", "02")
                                templateURL = templateURL.replace("[message]", text7)
                                hasWorked = true
                            }
                        }
                        if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
                            var newURL = templateURL
                            alert("URL generated!")
                            if (confirm("Is this correct?\n" + newURL)) {
                                if (!!document.getElementById("iframeModal")) {
                                    document.getElementById("iframeModal").src = newURL
                                    document.getElementById("iframeModal").style.display = "block"
                                    document.getElementById("optionsmenu").style.display = "none"
                                } else {
                                    var iframeModal = document.createElement("iframe")
                                    iframeModal.id = "iframeModal"
                                    iframeModal.className = "iframeModal"
                                    iframeModal.frameBorder = "0"
                                    iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                                    iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                                    iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                    document.body.appendChild(iframeModal)
                                    document.getElementById("iframeModal").src = newURL
                                    document.getElementById("iframeModal").style.display = "block"
                                    document.getElementById("optionsmenu").style.display = "none"
                                }
                            }
                        } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
                            alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
                        } else {
                            alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
                        }
                    }
                }
            }
            document.getElementById("svg4").onclick = function() {
                var TEMPLATEURL = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
                const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
                    currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                    currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
                    currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var currentYear = new Date().getFullYear(),
                    currentMonth = currentMonths[new Date().getMonth()],
                    currentDay = currentDays[new Date().getDate()],
                    currentHour = currentHours[new Date().getHours()],
                    currentMinute = currentMinutes[new Date().getMinutes()],
                    currentDayofWeek = currentDayofWeeks[new Date().getDay()],
                    text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
                    text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
                    text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
                    text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
                    text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
                    text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
                    text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
                generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

                function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
                    var hasWorked = false
                    templateURL = templateURL.replace("[year]", year)
                    templateURL = templateURL.replace("[month]", month)
                    templateURL = templateURL.replace("[day]", day)
                    templateURL = templateURL.replace("[hour]", "07")
                    templateURL = templateURL.replace("[minute]", "55")
                    templateURL = templateURL.replace("[second]", "02")
                    templateURL = templateURL.replace("[message]", text1)
                    hasWorked = true
                    if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
                        var newURL = templateURL
                        alert("URL generated!")
                        if (confirm("Is this correct?\n" + newURL)) {
                            if (!!document.getElementById("iframeModal")) {
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            } else {
                                var iframeModal = document.createElement("iframe")
                                iframeModal.id = "iframeModal"
                                iframeModal.className = "iframeModal"
                                iframeModal.frameBorder = "0"
                                iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                                iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                                iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                document.body.appendChild(iframeModal)
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"

                            }
                        }
                    } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
                        alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
                    } else {
                        alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
                    }
                }
            }
            document.getElementById("svg5").onclick = function() {
                var TEMPLATEURL = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
                const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
                    currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                    currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
                    currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var currentYear = new Date().getFullYear(),
                    currentMonth = currentMonths[new Date().getMonth()],
                    currentDay = currentDays[new Date().getDate()],
                    currentHour = currentHours[new Date().getHours()],
                    currentMinute = currentMinutes[new Date().getMinutes()],
                    currentDayofWeek = currentDayofWeeks[new Date().getDay()],
                    text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
                    text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
                    text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
                    text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
                    text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
                    text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
                    text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
                generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

                function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
                    var hasWorked = false
                    templateURL = templateURL.replace("[year]", year)
                    templateURL = templateURL.replace("[month]", month)
                    templateURL = templateURL.replace("[day]", day)
                    templateURL = templateURL.replace("[hour]", "07")
                    templateURL = templateURL.replace("[minute]", "55")
                    templateURL = templateURL.replace("[second]", "02")
                    templateURL = templateURL.replace("[message]", text1)
                    hasWorked = true
                    if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
                        var newURL = templateURL
                        alert("URL generated!")
                        if (confirm("Is this correct?\n" + newURL)) {
                            if (!!document.getElementById("iframeModal")) {
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            } else {
                                var iframeModal = document.createElement("iframe")
                                iframeModal.id = "iframeModal"
                                iframeModal.className = "iframeModal"
                                iframeModal.frameBorder = "0"
                                iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                                iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                                iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                document.body.appendChild(iframeModal)
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            }
                        }
                    } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
                        alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
                    } else {
                        alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
                    }
                }
            }
            document.getElementById("svg6").onclick = function() {
                var TEMPLATEURL = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
                const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
                    currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                    currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
                    currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var currentYear = new Date().getFullYear(),
                    currentMonth = currentMonths[new Date().getMonth()],
                    currentDay = currentDays[new Date().getDate()],
                    currentHour = currentHours[new Date().getHours()],
                    currentMinute = currentMinutes[new Date().getMinutes()],
                    currentDayofWeek = currentDayofWeeks[new Date().getDay()],
                    text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
                    text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
                    text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
                    text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
                    text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
                    text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
                    text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
                generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

                function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
                    var hasWorked = false
                    templateURL = templateURL.replace("[year]", year)
                    templateURL = templateURL.replace("[month]", month)
                    templateURL = templateURL.replace("[day]", day)
                    templateURL = templateURL.replace("[hour]", "08")
                    templateURL = templateURL.replace("[minute]", "50")
                    templateURL = templateURL.replace("[second]", "02")
                    templateURL = templateURL.replace("[message]", text2)
                    hasWorked = true
                    if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
                        var newURL = templateURL
                        alert("URL generated!")
                        if (confirm("Is this correct?\n" + newURL)) {
                            if (!!document.getElementById("iframeModal")) {
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            } else {
                                var iframeModal = document.createElement("iframe")
                                iframeModal.id = "iframeModal"
                                iframeModal.className = "iframeModal"
                                iframeModal.frameBorder = "0"
                                iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                                iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                                iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                document.body.appendChild(iframeModal)
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            }
                        }
                    } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
                        alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
                    } else {
                        alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
                    }
                }
            }
            document.getElementById("svg7").onclick = function() {
                var TEMPLATEURL = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
                const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
                    currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                    currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
                    currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var currentYear = new Date().getFullYear(),
                    currentMonth = currentMonths[new Date().getMonth()],
                    currentDay = currentDays[new Date().getDate()],
                    currentHour = currentHours[new Date().getHours()],
                    currentMinute = currentMinutes[new Date().getMinutes()],
                    currentDayofWeek = currentDayofWeeks[new Date().getDay()],
                    text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
                    text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
                    text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
                    text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
                    text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
                    text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
                    text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
                generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

                function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
                    var hasWorked = false
                    templateURL = templateURL.replace("[year]", year)
                    templateURL = templateURL.replace("[month]", month)
                    templateURL = templateURL.replace("[day]", day)
                    templateURL = templateURL.replace("[hour]", "08")
                    templateURL = templateURL.replace("[minute]", "50")
                    templateURL = templateURL.replace("[second]", "02")
                    templateURL = templateURL.replace("[message]", text2)
                    hasWorked = true
                    if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
                        var newURL = templateURL
                        alert("URL generated!")
                        if (confirm("Is this correct?\n" + newURL)) {
                            if (!!document.getElementById("iframeModal")) {
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            } else {
                                var iframeModal = document.createElement("iframe")
                                iframeModal.id = "iframeModal"
                                iframeModal.className = "iframeModal"
                                iframeModal.frameBorder = "0"
                                iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                                iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                                iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                document.body.appendChild(iframeModal)
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            }
                        }
                    } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
                        alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
                    } else {
                        alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
                    }
                }
            }
            document.getElementById("svg8").onclick = function() {
                var TEMPLATEURL = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
                const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
                    currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                    currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
                    currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var currentYear = new Date().getFullYear(),
                    currentMonth = currentMonths[new Date().getMonth()],
                    currentDay = currentDays[new Date().getDate()],
                    currentHour = currentHours[new Date().getHours()],
                    currentMinute = currentMinutes[new Date().getMinutes()],
                    currentDayofWeek = currentDayofWeeks[new Date().getDay()],
                    text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
                    text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
                    text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
                    text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
                    text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
                    text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
                    text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
                generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

                function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
                    var hasWorked = false
                    templateURL = templateURL.replace("[year]", year)
                    templateURL = templateURL.replace("[month]", month)
                    templateURL = templateURL.replace("[day]", day)
                    templateURL = templateURL.replace("[hour]", "09")
                    templateURL = templateURL.replace("[minute]", "48")
                    templateURL = templateURL.replace("[second]", "02")
                    templateURL = templateURL.replace("[message]", text3)
                    hasWorked = true
                    if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
                        var newURL = templateURL
                        alert("URL generated!")
                        if (confirm("Is this correct?\n" + newURL)) {
                            if (!!document.getElementById("iframeModal")) {
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            } else {
                                var iframeModal = document.createElement("iframe")
                                iframeModal.id = "iframeModal"
                                iframeModal.className = "iframeModal"
                                iframeModal.frameBorder = "0"
                                iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                                iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                                iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                document.body.appendChild(iframeModal)
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            }
                        }
                    } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
                        alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
                    } else {
                        alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
                    }
                }
            }
            document.getElementById("svg9").onclick = function() {
                var TEMPLATEURL = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
                const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
                    currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                    currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
                    currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var currentYear = new Date().getFullYear(),
                    currentMonth = currentMonths[new Date().getMonth()],
                    currentDay = currentDays[new Date().getDate()],
                    currentHour = currentHours[new Date().getHours()],
                    currentMinute = currentMinutes[new Date().getMinutes()],
                    currentDayofWeek = currentDayofWeeks[new Date().getDay()],
                    text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
                    text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
                    text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
                    text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
                    text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
                    text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
                    text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
                generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

                function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
                    var hasWorked = false
                    templateURL = templateURL.replace("[year]", year)
                    templateURL = templateURL.replace("[month]", month)
                    templateURL = templateURL.replace("[day]", day)
                    templateURL = templateURL.replace("[hour]", "09")
                    templateURL = templateURL.replace("[minute]", "48")
                    templateURL = templateURL.replace("[second]", "02")
                    templateURL = templateURL.replace("[message]", text3)
                    hasWorked = true
                    if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
                        var newURL = templateURL
                        alert("URL generated!")
                        if (confirm("Is this correct?\n" + newURL)) {
                            if (!!document.getElementById("iframeModal")) {
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            } else {
                                var iframeModal = document.createElement("iframe")
                                iframeModal.id = "iframeModal"
                                iframeModal.className = "iframeModal"
                                iframeModal.frameBorder = "0"
                                iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                                iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                                iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                document.body.appendChild(iframeModal)
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            }
                        }
                    } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
                        alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
                    } else {
                        alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
                    }
                }
            }
            document.getElementById("svg10").onclick = function() {
                var TEMPLATEURL = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
                const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
                    currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                    currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
                    currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var currentYear = new Date().getFullYear(),
                    currentMonth = currentMonths[new Date().getMonth()],
                    currentDay = currentDays[new Date().getDate()],
                    currentHour = currentHours[new Date().getHours()],
                    currentMinute = currentMinutes[new Date().getMinutes()],
                    currentDayofWeek = currentDayofWeeks[new Date().getDay()],
                    text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
                    text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
                    text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
                    text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
                    text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
                    text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
                    text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
                generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

                function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
                    var hasWorked = false
                    templateURL = templateURL.replace("[year]", year)
                    templateURL = templateURL.replace("[month]", month)
                    templateURL = templateURL.replace("[day]", day)
                    templateURL = templateURL.replace("[hour]", "10")
                    templateURL = templateURL.replace("[minute]", "46")
                    templateURL = templateURL.replace("[second]", "02")
                    templateURL = templateURL.replace("[message]", text4)
                    hasWorked = true
                    if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
                        var newURL = templateURL
                        alert("URL generated!")
                        if (confirm("Is this correct?\n" + newURL)) {
                            if (!!document.getElementById("iframeModal")) {
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            } else {
                                var iframeModal = document.createElement("iframe")
                                iframeModal.id = "iframeModal"
                                iframeModal.className = "iframeModal"
                                iframeModal.frameBorder = "0"
                                iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                                iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                                iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                document.body.appendChild(iframeModal)
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            }
                        }
                    } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
                        alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
                    } else {
                        alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
                    }
                }
            }
            document.getElementById("svg11").onclick = function() {
                var TEMPLATEURL = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
                const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
                    currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                    currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
                    currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var currentYear = new Date().getFullYear(),
                    currentMonth = currentMonths[new Date().getMonth()],
                    currentDay = currentDays[new Date().getDate()],
                    currentHour = currentHours[new Date().getHours()],
                    currentMinute = currentMinutes[new Date().getMinutes()],
                    currentDayofWeek = currentDayofWeeks[new Date().getDay()],
                    text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
                    text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
                    text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
                    text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
                    text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
                    text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
                    text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
                generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

                function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
                    var hasWorked = false
                    templateURL = templateURL.replace("[year]", year)
                    templateURL = templateURL.replace("[month]", month)
                    templateURL = templateURL.replace("[day]", day)
                    templateURL = templateURL.replace("[hour]", "10")
                    templateURL = templateURL.replace("[minute]", "46")
                    templateURL = templateURL.replace("[second]", "02")
                    templateURL = templateURL.replace("[message]", text4)
                    hasWorked = true
                    if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
                        var newURL = templateURL
                        alert("URL generated!")
                        if (confirm("Is this correct?\n" + newURL)) {
                            if (!!document.getElementById("iframeModal")) {
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            } else {
                                var iframeModal = document.createElement("iframe")
                                iframeModal.id = "iframeModal"
                                iframeModal.className = "iframeModal"
                                iframeModal.frameBorder = "0"
                                iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                                iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                                iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                document.body.appendChild(iframeModal)
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            }
                        }
                    } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
                        alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
                    } else {
                        alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
                    }
                }
            }
            document.getElementById("svg12").onclick = function() {
                var TEMPLATEURL = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
                const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
                    currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                    currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
                    currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var currentYear = new Date().getFullYear(),
                    currentMonth = currentMonths[new Date().getMonth()],
                    currentDay = currentDays[new Date().getDate()],
                    currentHour = currentHours[new Date().getHours()],
                    currentMinute = currentMinutes[new Date().getMinutes()],
                    currentDayofWeek = currentDayofWeeks[new Date().getDay()],
                    text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
                    text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
                    text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
                    text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
                    text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
                    text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
                    text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
                generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

                function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
                    var hasWorked = false
                    templateURL = templateURL.replace("[year]", year)
                    templateURL = templateURL.replace("[month]", month)
                    templateURL = templateURL.replace("[day]", day)
                    templateURL = templateURL.replace("[hour]", "12")
                    templateURL = templateURL.replace("[minute]", "14")
                    templateURL = templateURL.replace("[second]", "02")
                    templateURL = templateURL.replace("[message]", text5)
                    hasWorked = true
                    if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
                        var newURL = templateURL
                        alert("URL generated!")
                        if (confirm("Is this correct?\n" + newURL)) {
                            if (!!document.getElementById("iframeModal")) {
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            } else {
                                var iframeModal = document.createElement("iframe")
                                iframeModal.id = "iframeModal"
                                iframeModal.className = "iframeModal"
                                iframeModal.frameBorder = "0"
                                iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                                iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                                iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                document.body.appendChild(iframeModal)
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            }
                        }
                    } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
                        alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
                    } else {
                        alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
                    }
                }
            }
            document.getElementById("svg13").onclick = function() {
                var TEMPLATEURL = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
                const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
                    currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                    currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
                    currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var currentYear = new Date().getFullYear(),
                    currentMonth = currentMonths[new Date().getMonth()],
                    currentDay = currentDays[new Date().getDate()],
                    currentHour = currentHours[new Date().getHours()],
                    currentMinute = currentMinutes[new Date().getMinutes()],
                    currentDayofWeek = currentDayofWeeks[new Date().getDay()],
                    text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
                    text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
                    text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
                    text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
                    text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
                    text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
                    text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
                generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

                function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
                    var hasWorked = false
                    templateURL = templateURL.replace("[year]", year)
                    templateURL = templateURL.replace("[month]", month)
                    templateURL = templateURL.replace("[day]", day)
                    templateURL = templateURL.replace("[hour]", "12")
                    templateURL = templateURL.replace("[minute]", "14")
                    templateURL = templateURL.replace("[second]", "02")
                    templateURL = templateURL.replace("[message]", text5)
                    hasWorked = true
                    if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
                        var newURL = templateURL
                        alert("URL generated!")
                        if (confirm("Is this correct?\n" + newURL)) {
                            if (!!document.getElementById("iframeModal")) {
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            } else {
                                var iframeModal = document.createElement("iframe")
                                iframeModal.id = "iframeModal"
                                iframeModal.className = "iframeModal"
                                iframeModal.frameBorder = "0"
                                iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                                iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                                iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                document.body.appendChild(iframeModal)
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            }
                        }
                    } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
                        alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
                    } else {
                        alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
                    }
                }
            }
            document.getElementById("svg14").onclick = function() {
                var TEMPLATEURL = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
                const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
                    currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                    currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
                    currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var currentYear = new Date().getFullYear(),
                    currentMonth = currentMonths[new Date().getMonth()],
                    currentDay = currentDays[new Date().getDate()],
                    currentHour = currentHours[new Date().getHours()],
                    currentMinute = currentMinutes[new Date().getMinutes()],
                    currentDayofWeek = currentDayofWeeks[new Date().getDay()],
                    text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
                    text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
                    text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
                    text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
                    text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
                    text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
                    text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
                generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

                function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
                    var hasWorked = false
                    templateURL = templateURL.replace("[year]", year)
                    templateURL = templateURL.replace("[month]", month)
                    templateURL = templateURL.replace("[day]", day)
                    templateURL = templateURL.replace("[hour]", "13")
                    templateURL = templateURL.replace("[minute]", "12")
                    templateURL = templateURL.replace("[second]", "02")
                    templateURL = templateURL.replace("[message]", text6)
                    hasWorked = true
                    if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
                        var newURL = templateURL
                        alert("URL generated!")
                        if (confirm("Is this correct?\n" + newURL)) {
                            if (!!document.getElementById("iframeModal")) {
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            } else {
                                var iframeModal = document.createElement("iframe")
                                iframeModal.id = "iframeModal"
                                iframeModal.className = "iframeModal"
                                iframeModal.frameBorder = "0"
                                iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                                iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                                iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                document.body.appendChild(iframeModal)
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            }
                        }
                    } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
                        alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
                    } else {
                        alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
                    }
                }
            }
            document.getElementById("svg15").onclick = function() {
                var TEMPLATEURL = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
                const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
                    currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                    currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
                    currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var currentYear = new Date().getFullYear(),
                    currentMonth = currentMonths[new Date().getMonth()],
                    currentDay = currentDays[new Date().getDate()],
                    currentHour = currentHours[new Date().getHours()],
                    currentMinute = currentMinutes[new Date().getMinutes()],
                    currentDayofWeek = currentDayofWeeks[new Date().getDay()],
                    text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
                    text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
                    text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
                    text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
                    text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
                    text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
                    text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
                generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

                function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
                    var hasWorked = false
                    templateURL = templateURL.replace("[year]", year)
                    templateURL = templateURL.replace("[month]", month)
                    templateURL = templateURL.replace("[day]", day)
                    templateURL = templateURL.replace("[hour]", "13")
                    templateURL = templateURL.replace("[minute]", "12")
                    templateURL = templateURL.replace("[second]", "02")
                    templateURL = templateURL.replace("[message]", text6)
                    hasWorked = true
                    if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
                        var newURL = templateURL
                        alert("URL generated!")
                        if (confirm("Is this correct?\n" + newURL)) {
                            if (!!document.getElementById("iframeModal")) {
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            } else {
                                var iframeModal = document.createElement("iframe")
                                iframeModal.id = "iframeModal"
                                iframeModal.className = "iframeModal"
                                iframeModal.frameBorder = "0"
                                iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                                iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                                iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                document.body.appendChild(iframeModal)
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            }
                        }
                    } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
                        alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
                    } else {
                        alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
                    }
                }
            }
            document.getElementById("svg16").onclick = function() {
                var TEMPLATEURL = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
                const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
                    currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                    currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
                    currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var currentYear = new Date().getFullYear(),
                    currentMonth = currentMonths[new Date().getMonth()],
                    currentDay = currentDays[new Date().getDate()],
                    currentHour = currentHours[new Date().getHours()],
                    currentMinute = currentMinutes[new Date().getMinutes()],
                    currentDayofWeek = currentDayofWeeks[new Date().getDay()],
                    text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
                    text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
                    text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
                    text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
                    text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
                    text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
                    text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
                generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

                function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
                    var hasWorked = false
                    templateURL = templateURL.replace("[year]", year)
                    templateURL = templateURL.replace("[month]", month)
                    templateURL = templateURL.replace("[day]", day)
                    templateURL = templateURL.replace("[hour]", "14")
                    templateURL = templateURL.replace("[minute]", "10")
                    templateURL = templateURL.replace("[second]", "02")
                    templateURL = templateURL.replace("[message]", text7)
                    hasWorked = true
                    if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
                        var newURL = templateURL
                        alert("URL generated!")
                        if (confirm("Is this correct?\n" + newURL)) {
                            if (!!document.getElementById("iframeModal")) {
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            } else {
                                var iframeModal = document.createElement("iframe")
                                iframeModal.id = "iframeModal"
                                iframeModal.className = "iframeModal"
                                iframeModal.frameBorder = "0"
                                iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                                iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                                iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                document.body.appendChild(iframeModal)
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            }
                        }
                    } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
                        alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
                    } else {
                        alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
                    }
                }
            }
            document.getElementById("svg17").onclick = function() {
                var TEMPLATEURL = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
                const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
                    currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                    currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
                    currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                var currentYear = new Date().getFullYear(),
                    currentMonth = currentMonths[new Date().getMonth()],
                    currentDay = currentDays[new Date().getDate()],
                    currentHour = currentHours[new Date().getHours()],
                    currentMinute = currentMinutes[new Date().getMinutes()],
                    currentDayofWeek = currentDayofWeeks[new Date().getDay()],
                    text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
                    text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
                    text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
                    text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
                    text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
                    text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
                    text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
                generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

                function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
                    var hasWorked = false
                    templateURL = templateURL.replace("[year]", year)
                    templateURL = templateURL.replace("[month]", month)
                    templateURL = templateURL.replace("[day]", day)
                    templateURL = templateURL.replace("[hour]", "14")
                    templateURL = templateURL.replace("[minute]", "10")
                    templateURL = templateURL.replace("[second]", "02")
                    templateURL = templateURL.replace("[message]", text7)
                    hasWorked = true
                    if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
                        var newURL = templateURL
                        alert("URL generated!")
                        if (confirm("Is this correct?\n" + newURL)) {
                            if (!!document.getElementById("iframeModal")) {
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            } else {
                                var iframeModal = document.createElement("iframe")
                                iframeModal.id = "iframeModal"
                                iframeModal.className = "iframeModal"
                                iframeModal.frameBorder = "0"
                                iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                                iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                                iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                document.body.appendChild(iframeModal)
                                document.getElementById("iframeModal").src = newURL
                                document.getElementById("iframeModal").style.display = "block"
                                document.getElementById("optionsmenu").style.display = "none"
                            }
                        }
                    } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
                        alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
                    } else {
                        alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
                    }
                }
            }
            document.getElementById("svg18").onclick = function() {
                document.getElementById("myModal").style.display = "block"
            }
            document.getElementById("svg19").onclick = function() {
                document.getElementById("myModal").style.display = "block"
            }
            document.getElementsByClassName("close")[0].onclick = function() {
                document.querySelector(".modal-content").style.animationName = "animatebottom"
                document.querySelector(".modal-content").style.animationPlayState = "playing"
                setTimeout(function() {
                    document.getElementById("myModal").style.display = "none";
                    document.querySelector(".modal-content").style.animationName = "animatetop"
                }, 350)
            }
            var optionsmenuclicked = false
            document.getElementById("optionsmenua").onclick = function() {
                if (!optionsmenuclicked) {
                    document.querySelector(".optionsmenu").style.animationName = "animatetop2"
                    document.querySelector(".optionsmenu").style.animationPlayState = "playing"
                    document.querySelector(".optionsmenu").style.animationDuration = "0.4s"
                    document.querySelector(".optionsmenu").style.animationFillMode = "forwards"
                    document.getElementById("optionsmenua").style.animationName = "animatetop3"
                    document.getElementById("optionsmenua").style.animationPlayState = "playing"
                    document.getElementById("optionsmenua").style.animationDuration = "0.4s"
                    document.getElementById("optionsmenua").style.animationFillMode = "forwards"
                    optionsmenuclicked = true
                } else {
                    document.querySelector(".optionsmenu").style.animationName = "animatebottom2"
                    document.querySelector(".optionsmenu").style.animationPlayState = "playing"
                    document.querySelector(".optionsmenu").style.animationDuration = "0.4s"
                    document.querySelector(".optionsmenu").style.animationFillMode = "forwards"
                    document.getElementById("optionsmenua").style.animationName = "animatebottom3"
                    document.getElementById("optionsmenua").style.animationPlayState = "playing"
                    document.getElementById("optionsmenua").style.animationDuration = "0.4s"
                    document.getElementById("optionsmenua").style.animationFillMode = "forwards"
                    optionsmenuclicked = false
                }
            }
            document.getElementById("countdowncheckerbutton").onclick = function() {
                if (document.getElementById("countdownchecker").value !== "") {
                    alert("URL generated!")
                    var datetimeValue = document.getElementById("countdownchecker").value + "M" + encodeURIComponent(document.getElementById("countdowncheckertext").value)
                    var placeholderString = window.location.href + "?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=[millisecond]&message=[message]"
                    placeholderString = placeholderString.replace("[month]", datetimeValue.substring(5, 7))
                    placeholderString = placeholderString.replace("[day]", datetimeValue.substring(8, 10))
                    placeholderString = placeholderString.replace("[year]", datetimeValue.substring(0, 4))
                    placeholderString = placeholderString.replace("[hour]", datetimeValue.substring(11, 13))
                    placeholderString = placeholderString.replace("[minute]", datetimeValue.substring(14, 16))
                    placeholderString = placeholderString.replace("[second]", ((document.getElementById("countdowncheckertext1").value == "") ? "00" : document.getElementById("countdowncheckertext1").value))
                    placeholderString = placeholderString.replace("[millisecond]", ((document.getElementById("countdowncheckertext2").value == "") ? "00" : document.getElementById("countdowncheckertext2").value))
                    placeholderString = placeholderString.replace("[message]", datetimeValue.substring(17))
                    var newURL = placeholderString
                    if (confirm("Is this correct?\n" + newURL)) {
                        if (!!document.getElementById("iframeModal")) {
                            document.getElementById("iframeModal").src = newURL
                            document.getElementById("iframeModal").style.display = "block"
                            document.getElementById("optionsmenu").style.display = "none"
                        } else {
                            var iframeModal = document.createElement("iframe")
                            iframeModal.id = "iframeModal"
                            iframeModal.className = "iframeModal"
                            iframeModal.frameBorder = "0"
                            iframeModal.style = "display: none; margin: auto; position: fixed; z-index: 999; left: 1%; top: 0%; right: 1%; bottom: 0%; width: 98%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
                            iframeModal.allow = "accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *"
                            iframeModal.sandbox = "allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                            document.body.appendChild(iframeModal)
                            document.getElementById("iframeModal").src = newURL
                            document.getElementById("iframeModal").style.display = "block"
                            document.getElementById("optionsmenu").style.display = "none"
                            document.getElementById("countdownchecker").value = ""
                            document.getElementById("countdowncheckertext").value = ""
                            document.getElementById("countdowncheckertext1").value = ""
                            document.getElementById("countdowncheckertext2").value = ""
                        }
                    }
                } else {
                    alert("You need to enter something.")
                }
                document.querySelector(".modal-content").style.animationName = "animatebottom"
                document.querySelector(".modal-content").style.animationPlayState = "playing"
                setTimeout(function() {
                    document.getElementById("myModal").style.display = "none";
                    document.querySelector(".modal-content").style.animationName = "animatetop"
                }, 350)
            }
            window.onclick = function(event) {
                if (event.target == document.getElementById("myModal")) {
                    document.querySelector(".modal-content").style.animationName = "animatebottom"
                    document.querySelector(".modal-content").style.animationPlayState = "playing"
                    setTimeout(function() {
                        document.getElementById("myModal").style.display = "none";
                        document.querySelector(".modal-content").style.animationName = "animatetop"
                    }, 350)
                }
            }
        }
    }
})