setTimeout(function() {
    onMaintenance.isOn = true;
    var redirect = false;
    var redirectPlusPassword = false;
    if (onMaintenance.isOn) {
        if (redirect) {
            alert("Sorry, we are currently undergoing maintenance!")
            if (redirectPlusPassword) {
                if (prompt("If you are the owner of this website to see how it's going, enter the password here else, just skip:") !== atob("MzMyMDI3Mjkw")) {
                    setTimeout(`document.body.innerHTML = \`<head> <link rel="shortcut icon" href="https://ssl.gstatic.com/docs/script/images/favicon.ico"> <title>Error</title> <style type="text/css" nonce="eOBe5a84XCGQOhXiuFQNtQ">body {background-color: #fff; margin: 0; padding: 0;}.errorMessage {font-family: Arial,sans-serif; font-size: 12pt; font-weight: bold; line-height: 150%; padding-top: 25px;}</style> </head> <body style="margin:20px"> <div><img alt="Google Apps Script" style="padding: 20px;" src="https://ssl.gstatic.com/docs/script/images/logo.png"></div> <div id="message" style="text-align:center;font-family:monospace;margin:50px auto 0;max-width:600px">The owner shut down this website due to this reason: Website Maintenance. If this was a mistake, contact the owner.</div> </body>\``, 500)
                }
            } else {
                setTimeout(`document.body.innerHTML = \`<head> <link rel="shortcut icon" href="https://ssl.gstatic.com/docs/script/images/favicon.ico"> <title>Error</title> <style type="text/css" nonce="eOBe5a84XCGQOhXiuFQNtQ">body {background-color: #fff; margin: 0; padding: 0;}.errorMessage {font-family: Arial,sans-serif; font-size: 12pt; font-weight: bold; line-height: 150%; padding-top: 25px;}</style> </head> <body style="margin:20px"> <div><img alt="Google Apps Script" style="padding: 20px;" src="https://ssl.gstatic.com/docs/script/images/logo.png"></div> <div id="message" style="text-align:center;font-family:monospace;margin:50px auto 0;max-width:600px">The owner shut down this website due to this reason: Website Maintenance. If this was a mistake, contact the owner.</div> </body>\``, 500)
            }
        }
    }
}, 150)