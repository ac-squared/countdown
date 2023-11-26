var date = new Date("Dec 22, 2023 15:30:00").getTime();

var loop = setInterval(function() {
  var currentDate = new Date().getTime();
  var distance = date - currentDate;

  document.getElementById("demo").innerHTML = Math.floor(distance / 86400000) + "d " + Math.floor((distance % 86400000) / 60000) + "m " + Math.floor((distance % 60000) / 1000) + "s ";

  // check if countdown is over
  if (distance < 0) {
    clearInterval(loop);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
