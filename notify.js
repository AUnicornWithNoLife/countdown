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
    console.log("notafication sent | " + String(t));
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