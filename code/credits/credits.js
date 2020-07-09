// if you add code, please add your name in here

const names = [
    ["Original Creator", "AUnicornWithNoLife"]
];

const wait = 3000;

var i = 0;

$(document).ready(function(){
    setInterval(function(){
        $("#tag").text(names[i][0]);
        $("#name").text(names[i][1]);

        i++;

        if (i > names.length){
            return;
        }
    }, wait)
});