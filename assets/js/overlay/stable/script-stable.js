var timeriframe = document.createElement("iframe")
timeriframe.id="timeriframe"
timeriframe.width = 600
timeriframe.height = 300
timeriframe.src = "https://justincodingprojects.github.io/automated-countdown-generator/assets/html/countdowntimer.html?month=11&day=08&year=2021&hour=13&minute=12&second=01&millisecond=00&message=End%20of%209/10%20Block"
timeriframe.style.position = "fixed"
timeriframe.style.top = 0
timeriframe.style.right = 0
timeriframe.style.float = "right"
timeriframe.style.zIndex = "9999"
document.body.appendChild(timeriframe)
