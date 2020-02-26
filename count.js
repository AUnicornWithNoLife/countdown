var days, hours, minutes, seconds, x, now, distance, url;

function c(date , text){
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

function share(){
  url = window.location.href; 

  document.execCommand('copy');

  alert("coppied to clipboard");

}

document.addEventListener('copy', function(e){
  e.clipboardData.setData('text/plain', url);
  e.preventDefault();
});

document.addEventListener('DOMContentLoaded', function() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser.');
    return;
  }

  if (Notification.permission !== 'granted'){
    Notification.requestPermission();
  }
});

function notifyMe(t) {
  if (Notification.permission !== 'granted'){
    Notification.requestPermission();
  }else{
    var notification = new Notification('Countdown Ended...', {
      icon: 'https://static.thenounproject.com/png/149379-200.png',
      body: 'Looks Like your event started :) \n hope you have fun...',
      timestamp: Date.parse(t),
    });
  }
}