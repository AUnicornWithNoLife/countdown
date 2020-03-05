var days, hours, minutes, seconds, x, now, distance, url;

function c(date , text){
  console.log("started countdown | " + String(date) + " | " + text);
  var countDownDate = new Date(date).getTime();

  x = setInterval(function() {
    now = new Date().getTime();
    distance = countDownDate - now;

    if (text.includes("<script>") || text.includes("<noscript>")){
      alert("fatal error with text input, errcode script.")
      distance = -1;
    }

    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(days === 1){
      days = days + " day, ";
    }else{
      days = days + " days, ";
    }

    if(hours === 1){
      hours = hours + " hour, ";
    }else{
      hours = hours + " hours, ";
    }

    if(minutes === 1){
      minutes = minutes + " minute and ";
    }else{
      minutes = minutes + " minutes and ";
    }

    if(seconds === 1){
      seconds = seconds + " second " + "until " + text;
    }else{
      seconds = seconds + " seconds " + "until " + text;
    }

    document.getElementById("count").innerHTML = days + hours + minutes + seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("count").innerHTML = "have a great day";
	    notifyMe(date);
    }
  }, 1000);
}