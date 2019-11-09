// Set the date we're counting down to
function c(date , text){
  var countDownDate = new Date(date).getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
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
  // Display the result in the element with id="demo"
  document.getElementById("count").innerHTML = days + hours + minutes + seconds;
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "have a great day";
  }
}, 1000);
}
