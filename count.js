var days, hours, minutes, seconds, x, now, distance, url;
function c(date , text){
  var countDownDate = new Date(date).getTime();
    x = setInterval(function() {
  now = new Date().getTime();
    distance = countDownDate - now;
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
    }
  }, 1000);
}
function share(){
  url = window.location.href;
  console.log(url);  
  document.execCommand('copy');
  alert("coppied to clipboard");
}
document.addEventListener('copy', function(e){
  if ($url != ""){
    e.clipboardData.setData('text/plain', url);
    e.preventDefault();
  }
});