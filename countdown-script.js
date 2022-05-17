var urlParams = window.location.href
        Date.prototype.today = function() {
            return (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "/" + ((this.getDate() < 10) ? "0" : "") + this.getDate() + "/" + this.getFullYear();
        }

        Date.prototype.timeNow = function() {
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
            if ("wakeLock" in navigator) {
                let wakeLock = null;
                async function start() {
                    wakeLock = await navigator.wakeLock.request('screen');
                }
                document.addEventListener('visibilitychange', async() => {
                    if (wakeLock !== null && document.visibilityState === 'visible') {
                        wakeLock = await navigator.wakeLock.request('screen');
                    }
                });
                start();
            }
            var egg = new Egg("esc", function() {
                toastr.options = {
                    "closeButton": true,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-bottom-right",
                    "preventDuplicates": true,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "3000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }
                toastr.info("If you're looking for a way to close this, click on the empty left side, then press escape.", "Needs Focus")
            }).listen();
            var x = setInterval(function() {

                var now = new Date().getTime();

                var distance = countDownDate - now;
                if (decodeURIComponent(urlParams.substring(urlParams.indexOf('message=') + 8)) !== "") {
                    document.getElementById("title").innerHTML = decodeURIComponent(urlParams.substring(urlParams.indexOf('message=') + 8))
                } else {
                    document.getElementById("title").innerHTML = "Countdown Timer"
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
                    setTimeout(function() {
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
    </script>
    <script type="text/javascript">
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
                        document.getElementById("mainbanner").innerHTML = "I've released the 4K intro video, as well as that it's now much more high-res and smoother than it's 1080p 30fps counterpart. It's just beautiful! :D"
                    }, 50)
                }
            } else if (bool == false) {
                if (document.getElementsByClassName("topnav")[0] !== undefined) {
                    document.body.removeChild(document.getElementsByClassName("topnav")[0])
                }
            }
        }
    </script>
    <script type="text/javascript">
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
        }, 50)
    </script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/egg.js/1.0/egg.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://apis.google.com/js/platform.js?onload=init" async defer></script>
    <script>
        (function(define) {
            define(['jquery'], function($) {
                return (function() {
                    var $container;
                    var listener;
                    var toastId = 0;
                    var toastType = {
                        error: 'error',
                        info: 'info',
                        success: 'success',
                        warning: 'warning'
                    };

                    var toastr = {
                        clear: clear,
                        remove: remove,
                        error: error,
                        getContainer: getContainer,
                        info: info,
                        options: {},
                        subscribe: subscribe,
                        success: success,
                        version: '2.1.2',
                        warning: warning
                    };

                    var previousToast;

                    return toastr;

                    function error(message, title, optionsOverride) {
                        return notify({
                            type: toastType.error,
                            iconClass: getOptions().iconClasses.error,
                            message: message,
                            optionsOverride: optionsOverride,
                            title: title
                        });
                    }

                    function getContainer(options, create) {
                        if (!options) {
                            options = getOptions();
                        }
                        $container = $('#' + options.containerId);
                        if ($container.length) {
                            return $container;
                        }
                        if (create) {
                            $container = createContainer(options);
                        }
                        return $container;
                    }

                    function info(message, title, optionsOverride) {
                        return notify({
                            type: toastType.info,
                            iconClass: getOptions().iconClasses.info,
                            message: message,
                            optionsOverride: optionsOverride,
                            title: title
                        });
                    }

                    function subscribe(callback) {
                        listener = callback;
                    }

                    function success(message, title, optionsOverride) {
                        return notify({
                            type: toastType.success,
                            iconClass: getOptions().iconClasses.success,
                            message: message,
                            optionsOverride: optionsOverride,
                            title: title
                        });
                    }

                    function warning(message, title, optionsOverride) {
                        return notify({
                            type: toastType.warning,
                            iconClass: getOptions().iconClasses.warning,
                            message: message,
                            optionsOverride: optionsOverride,
                            title: title
                        });
                    }

                    function clear($toastElement, clearOptions) {
                        var options = getOptions();
                        if (!$container) {
                            getContainer(options);
                        }
                        if (!clearToast($toastElement, options, clearOptions)) {
                            clearContainer(options);
                        }
                    }

                    function remove($toastElement) {
                        var options = getOptions();
                        if (!$container) {
                            getContainer(options);
                        }
                        if ($toastElement && $(':focus', $toastElement).length === 0) {
                            removeToast($toastElement);
                            return;
                        }
                        if ($container.children().length) {
                            $container.remove();
                        }
                    }


                    function clearContainer(options) {
                        var toastsToClear = $container.children();
                        for (var i = toastsToClear.length - 1; i >= 0; i--) {
                            clearToast($(toastsToClear[i]), options);
                        }
                    }

                    function clearToast($toastElement, options, clearOptions) {
                        var force = clearOptions && clearOptions.force ? clearOptions.force : false;
                        if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {
                            $toastElement[options.hideMethod]({
                                duration: options.hideDuration,
                                easing: options.hideEasing,
                                complete: function() {
                                    removeToast($toastElement);
                                }
                            });
                            return true;
                        }
                        return false;
                    }

                    function createContainer(options) {
                        $container = $('<div/>')
                            .attr('id', options.containerId)
                            .addClass(options.positionClass)
                            .attr('aria-live', 'polite')
                            .attr('role', 'alert');

                        $container.appendTo($(options.target));
                        return $container;
                    }

                    function getDefaults() {
                        return {
                            tapToDismiss: true,
                            toastClass: 'toast',
                            containerId: 'toast-container',
                            debug: false,

                            showMethod: 'fadeIn',
                            showDuration: 300,
                            showEasing: 'swing',
                            onShown: undefined,
                            hideMethod: 'fadeOut',
                            hideDuration: 1000,
                            hideEasing: 'swing',
                            onHidden: undefined,
                            closeMethod: false,
                            closeDuration: false,
                            closeEasing: false,

                            extendedTimeOut: 1000,
                            iconClasses: {
                                error: 'toast-error',
                                info: 'toast-info',
                                success: 'toast-success',
                                warning: 'toast-warning'
                            },
                            iconClass: 'toast-info',
                            positionClass: 'toast-top-right',
                            titleClass: 'toast-title',
                            messageClass: 'toast-message',
                            escapeHtml: false,
                            target: 'body',
                            closeHtml: '<button type="button">&times;</button>',
                            newestOnTop: true,
                            preventDuplicates: false,
                            progressBar: false
                        };
                    }

                    function publish(args) {
                        if (!listener) {
                            return;
                        }
                        listener(args);
                    }

                    function notify(map) {
                        var options = getOptions();
                        var iconClass = map.iconClass || options.iconClass;

                        if (typeof(map.optionsOverride) !== 'undefined') {
                            options = $.extend(options, map.optionsOverride);
                            iconClass = map.optionsOverride.iconClass || iconClass;
                        }

                        if (shouldExit(options, map)) {
                            return;
                        }

                        toastId++;

                        $container = getContainer(options, true);

                        var intervalId = null;
                        var $toastElement = $('<div/>');
                        var $titleElement = $('<div/>');
                        var $messageElement = $('<div/>');
                        var $progressElement = $('<div/>');
                        var $closeElement = $(options.closeHtml);
                        var progressBar = {
                            intervalId: null,
                            hideEta: null,
                            maxHideTime: null
                        };
                        var response = {
                            toastId: toastId,
                            state: 'visible',
                            startTime: new Date(),
                            options: options,
                            map: map
                        };

                        personalizeToast();

                        displayToast();

                        handleEvents();

                        publish(response);

                        if (options.debug && console) {
                            console.log(response);
                        }

                        return $toastElement;

                        function escapeHtml(source) {
                            if (source == null)
                                source = "";

                            return new String(source)
                                .replace(/&/g, '&amp;')
                                .replace(/"/g, '&quot;')
                                .replace(/'/g, '&#39;')
                                .replace(/</g, '&lt;')
                                .replace(/>/g, '&gt;');
                        }

                        function personalizeToast() {
                            setIcon();
                            setTitle();
                            setMessage();
                            setCloseButton();
                            setProgressBar();
                            setSequence();
                        }

                        function handleEvents() {
                            $toastElement.hover(stickAround, delayedHideToast);
                            if (!options.onclick && options.tapToDismiss) {
                                $toastElement.click(hideToast);
                            }

                            if (options.closeButton && $closeElement) {
                                $closeElement.click(function(event) {
                                    if (event.stopPropagation) {
                                        event.stopPropagation();
                                    } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                                        event.cancelBubble = true;
                                    }
                                    hideToast(true);
                                });
                            }

                            if (options.onclick) {
                                $toastElement.click(function(event) {
                                    options.onclick(event);
                                    hideToast();
                                });
                            }
                        }

                        function displayToast() {
                            $toastElement.hide();

                            $toastElement[options.showMethod]({
                                duration: options.showDuration,
                                easing: options.showEasing,
                                complete: options.onShown
                            });

                            if (options.timeOut > 0) {
                                intervalId = setTimeout(hideToast, options.timeOut);
                                progressBar.maxHideTime = parseFloat(options.timeOut);
                                progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                                if (options.progressBar) {
                                    progressBar.intervalId = setInterval(updateProgress, 10);
                                }
                            }
                        }

                        function setIcon() {
                            if (map.iconClass) {
                                $toastElement.addClass(options.toastClass).addClass(iconClass);
                            }
                        }

                        function setSequence() {
                            if (options.newestOnTop) {
                                $container.prepend($toastElement);
                            } else {
                                $container.append($toastElement);
                            }
                        }

                        function setTitle() {
                            if (map.title) {
                                $titleElement.append(!options.escapeHtml ? map.title : escapeHtml(map.title)).addClass(options.titleClass);
                                $toastElement.append($titleElement);
                            }
                        }

                        function setMessage() {
                            if (map.message) {
                                $messageElement.append(!options.escapeHtml ? map.message : escapeHtml(map.message)).addClass(options.messageClass);
                                $toastElement.append($messageElement);
                            }
                        }

                        function setCloseButton() {
                            if (options.closeButton) {
                                $closeElement.addClass('toast-close-button').attr('role', 'button');
                                $toastElement.prepend($closeElement);
                            }
                        }

                        function setProgressBar() {
                            if (options.progressBar) {
                                $progressElement.addClass('toast-progress');
                                $toastElement.prepend($progressElement);
                            }
                        }

                        function shouldExit(options, map) {
                            if (options.preventDuplicates) {
                                if (map.message === previousToast) {
                                    return true;
                                } else {
                                    previousToast = map.message;
                                }
                            }
                            return false;
                        }

                        function hideToast(override) {
                            var method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod;
                            var duration = override && options.closeDuration !== false ?
                                options.closeDuration : options.hideDuration;
                            var easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing;
                            if ($(':focus', $toastElement).length && !override) {
                                return;
                            }
                            clearTimeout(progressBar.intervalId);
                            return $toastElement[method]({
                                duration: duration,
                                easing: easing,
                                complete: function() {
                                    removeToast($toastElement);
                                    if (options.onHidden && response.state !== 'hidden') {
                                        options.onHidden();
                                    }
                                    response.state = 'hidden';
                                    response.endTime = new Date();
                                    publish(response);
                                }
                            });
                        }

                        function delayedHideToast() {
                            if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                                intervalId = setTimeout(hideToast, options.extendedTimeOut);
                                progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
                                progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                            }
                        }

                        function stickAround() {
                            clearTimeout(intervalId);
                            progressBar.hideEta = 0;
                            $toastElement.stop(true, true)[options.showMethod]({
                                duration: options.showDuration,
                                easing: options.showEasing
                            });
                        }

                        function updateProgress() {
                            var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100;
                            $progressElement.width(percentage + '%');
                        }
                    }

                    function getOptions() {
                        return $.extend({}, getDefaults(), toastr.options);
                    }

                    function removeToast($toastElement) {
                        if (!$container) {
                            $container = getContainer();
                        }
                        if ($toastElement.is(':visible')) {
                            return;
                        }
                        $toastElement.remove();
                        $toastElement = null;
                        if ($container.children().length === 0) {
                            $container.remove();
                            previousToast = undefined;
                        }
                    }

                })();
            });
        }(typeof define === 'function' && define.amd ? define : function(deps, factory) {
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = factory(require('jquery'));
            } else {
                window.toastr = factory(window.jQuery);
            }
        }));
