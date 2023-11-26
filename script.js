var date = new Date("Dec 22, 2023 15:30:00").getTime();
var now = new Date().getTime();

var loop = setInterval(function() {
  var now = new Date().getTime();
  var distance = date - now;

  document.getElementById("demo").innerHTML = Math.floor(distance / 86400000) + "d " + Math.floor((distance % 86400000) / 3600000) + "h " + Math.floor((distance % 600000) / 60000) + "m " + Math.floor((distance % 60000) / 1000) + "s ";

  if (distance <= 0) {
      clearInterval(interval);
      document.getElementById("demo").innerHTML = "EXPIRED";
}, 1000);
