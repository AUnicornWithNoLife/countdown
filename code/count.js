var days, hours, minutes, seconds, x, now, distance;

function c(date , text){
  var countDownDate = new Date(date).getTime();

  console.log("count started | " + String(date) + " | " + String(text));

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
      days = days + " Day, ";
    }else{
      days = days + " Days, ";
    }

    if(hours === 1){
      hours = hours + " Hour, ";
    }else{
      hours = hours + " Hours, ";
    }

    if(minutes === 1){
      minutes = minutes + " Minute and ";
    }else{
      minutes = minutes + " Minutes and ";
    }

    if(seconds === 1){
      seconds = seconds + " Second " + "until " + text;
    }else{
      seconds = seconds + " Seconds " + "until " + text;
    }

    document.getElementById("count").innerHTML = days + hours + minutes + seconds;

    if (distance < 0) {
      clearInterval(x);

      document.getElementById("count").innerHTML = "Your Countdown Timer Has Finnished, <br> Have a Great Day!!";
      
	    notifyMe(date);
    }
  }, 1000);
}