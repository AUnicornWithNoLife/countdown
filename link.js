function share() {
    /* Get the text field */
    var copyText = document.createElement('textarea');
    copyText.value = window.location.href;
  
    /* Select the text field */
    copyText.select(); 
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text");

    console.log("copied text | " + str(window.location.href));

    document.body.removeChild(copyText);
}