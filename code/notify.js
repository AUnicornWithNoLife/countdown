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
            icon: './assets/notafication.png',
            body: 'The Countdown Has Finished, \n Hope you have fun',
            timestamp: Date.parse(t),
        });

        console.log("notafication sent | " + String(t));
    }
}