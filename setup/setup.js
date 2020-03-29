var one = "";
var two = "";

$(document).ready(function(){
    $("#1").click(function(){
        console.log("1");
        $.get("1.html", function(data, status){
            console.log(status)
            one = data;
        });
        $("#form").html(one);
    });
    $("#2").click(function(){
        console.log("2");
        $.get("2.html", function(data, status){
            console.log(status)
            two = data;
        });
        $("#form").html(two);
    });
});