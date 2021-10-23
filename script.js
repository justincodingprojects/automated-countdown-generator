//hehe :)
var TEMPLATEURL = "https://www.timeanddate.com/countdown/generic?iso=[year][month][day]T[hour][minute][second]&p0=2966&msg=[message]&font=sanserif&csz=1#"
const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
    currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
    currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
    currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
Date.prototype.getWeekOfMonth = function() {
    var firstWeekday = new Date(this.getFullYear(), this.getMonth(), 1).getDay();
    var offsetDate = this.getDate() + firstWeekday + 6;
    return Math.floor(offsetDate / 7);
}
var currentYear = new Date().getFullYear(),
    currentMonth = currentMonths[new Date().getMonth()],
    currentDay = currentDays[new Date().getDate()],
    currentHour = currentHours[new Date().getHours()],
    currentMinute = currentMinutes[new Date().getMinutes()],
    currentDayofWeek = currentDayofWeeks[new Date().getDay()],
    currentWeekofMonth = new Date().getWeekOfMonth()
text1 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
    text2 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
    text3 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
    text4 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
    text5 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
    text6 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, currentWeekofMonth, TEMPLATEURL)

function generateURL(year, month, day, hour, minute, dayofweek, weekofmonth, templateURL) {
    var isStart = false
    if (parseInt(month) == 11 && weekofmonth == 4) {
        isStart = true;
    }
    if (parseInt(month) == 12 && weekofmonth == 4) {
        isStart = true;
    }
    if (parseInt(month) == 12 && weekofmonth == 5) {
        isStart = true;
    }
    if (parseInt(month) == 1 && weekofmonth == 1) {
        isStart = true;
    }
    if (parseInt(month) == 1 && weekofmonth == 4 && dayofweek == "Monday") {
        isStart = true;
    }
    if (parseInt(month) == 2 && weekofmonth == 3 && dayofweek == "Monday") {
        isStart = true;
    }
    if (parseInt(month) == 3 && weekofmonth == 3) {
        isStart = true;
    }
    if (parseInt(month) == 5 && day == 29) {
        if (dayofweek == "Monday") {
            isStart = true;
        }
    }
    if (parseInt(month) == 5 && day == 30) {
        if (dayofweek == "Monday") {
            isStart = true;
        }
    }
    if (parseInt(month) == 5 && day == 31) {
        if (dayofweek == "Monday") {
            isStart = true;
        }
    }
    if (parseInt(month) == 5 && day == 31) {
        if (dayofweek == "Monday") {
            isStart = true;
        }
    }
    if (parseInt(month) == 6 && day == 4) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 5) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 6) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 7) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 8) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 9) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 10) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 11) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 12) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 13) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 14) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 15) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 16) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 17) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 18) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 19) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 20) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 21) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 22) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 23) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 24) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 25) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 26) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 27) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 28) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 29) {
        isStart = true;
    }
    if (parseInt(month) == 6 && day == 30) {
        isStart = true;
    }
    if (parseInt(month) == 7 && day == 1) {
        isStart = true;
    }
    if (parseInt(month) == 7 && day == 2) {
        isStart = true;
    }
    if (parseInt(month) == 7 && day == 3) {
        isStart = true;
    }
    if (parseInt(month) == 7 && day == 4) {
        isStart = true;
    }
    if (parseInt(month) == 7 && day == 5) {
        isStart = true;
    }
    if (parseInt(month) == 7 && day == 6) {
        isStart = true;
    }
    if (parseInt(month) == 7 && day == 7) {
        isStart = true;
    }
    if (parseInt(month) == 7 && day == 8) {
        isStart = true;
    }
    if (parseInt(month) == 7 && day == 9) {
        isStart = true;
    }
    if (!isStart) {
        var hasWorked = false
        templateURL = templateURL.replace("[year]", year)
        templateURL = templateURL.replace("[month]", month)
        templateURL = templateURL.replace("[day]", day)
        if (hour == 7) {
            if (minute > 55) {
                templateURL = templateURL.replace("[hour]", "08")
                templateURL = templateURL.replace("[minute]", "50")
                templateURL = templateURL.replace("[second]", "")
                templateURL = templateURL.replace("[message]", text1)
                hasWorked = true
            }
        }
        if (hour == 8) {
            if (minute < 50) {
                templateURL = templateURL.replace("[hour]", "08")
                templateURL = templateURL.replace("[minute]", "50")
                templateURL = templateURL.replace("[second]", "")
                templateURL = templateURL.replace("[message]", text1)
                hasWorked = true
            } else {
                templateURL = templateURL.replace("[hour]", "09")
                templateURL = templateURL.replace("[minute]", "48")
                templateURL = templateURL.replace("[second]", "")
                templateURL = templateURL.replace("[message]", text2)
                hasWorked = true
            }
        }
        if (hour == 9) {
            if (minute < 48) {
                templateURL = templateURL.replace("[hour]", "09")
                templateURL = templateURL.replace("[minute]", "48")
                templateURL = templateURL.replace("[second]", "")
                templateURL = templateURL.replace("[message]", text2)
                hasWorked = true
            } else {
                templateURL = templateURL.replace("[hour]", "10")
                templateURL = templateURL.replace("[minute]", "46")
                templateURL = templateURL.replace("[second]", "")
                templateURL = templateURL.replace("[message]", text3)
                hasWorked = true
            }
        }
        if (hour == 10) {
            if (minute < 46) {
                templateURL = templateURL.replace("[hour]", "10")
                templateURL = templateURL.replace("[minute]", "46")
                templateURL = templateURL.replace("[second]", "")
                templateURL = templateURL.replace("[message]", text3)
                hasWorked = true
            } else {
                templateURL = templateURL.replace("[hour]", "12")
                templateURL = templateURL.replace("[minute]", "14")
                templateURL = templateURL.replace("[second]", "")
                templateURL = templateURL.replace("[message]", text4)
                hasWorked = true
            }
        }
        if (hour == 11) {
            templateURL = templateURL.replace("[hour]", "12")
            templateURL = templateURL.replace("[minute]", "14")
            templateURL = templateURL.replace("[second]", "")
            templateURL = templateURL.replace("[message]", text4)
            hasWorked = true
        }
        if (hour == 12) {
            if (minute < 14) {
                templateURL = templateURL.replace("[hour]", "12")
                templateURL = templateURL.replace("[minute]", "14")
                templateURL = templateURL.replace("[second]", "")
                templateURL = templateURL.replace("[message]", text4)
                hasWorked = true
            } else {
                templateURL = templateURL.replace("[hour]", "13")
                templateURL = templateURL.replace("[minute]", "12")
                templateURL = templateURL.replace("[second]", "01")
                templateURL = templateURL.replace("[message]", text5)
                hasWorked = true
            }
        }
        if (hour == 13) {
            if (minute < 12) {
                templateURL = templateURL.replace("[hour]", "13")
                templateURL = templateURL.replace("[minute]", "12")
                templateURL = templateURL.replace("[second]", "01")
                templateURL = templateURL.replace("[message]", text5)
                hasWorked = true
            } else {
                templateURL = templateURL.replace("[hour]", "14")
                templateURL = templateURL.replace("[minute]", "10")
                templateURL = templateURL.replace("[second]", "")
                templateURL = templateURL.replace("[message]", text6)
                hasWorked = true
            }
        }
        if (hour == 14) {
            if (minute < 10) {
                templateURL = templateURL.replace("[hour]", "14")
                templateURL = templateURL.replace("[minute]", "10")
                templateURL = templateURL.replace("[second]", "")
                templateURL = templateURL.replace("[message]", text6)
                hasWorked = true
            }
        }
        if (hasWorked == true && dayofweek != "Sunday" && dayofweek != "Saturday") {
            var newURL = templateURL
            alert("URL generated!")
            if (confirm(`Is this correct?:
${newURL}`)) {
                window.open(newURL)
            }
        }
    } else {
        alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet. It could also be because of these reasons:
    1. You tried to generate this on a weekend.
    2. You tried to generate it on a break in which school is closed.`)
    }
}