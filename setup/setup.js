var one = "";
var two = "";

$(document).ready(function(){
    $("#1").click(function(){
        console.log("1");
        $.get("./1.html", function(data){
            one = data;
        });
        $("#form").html(one);
    });
    $("#2").click(function(){
        console.log("2");
        $.get("./2.html", function(data){
            two = data;
        });
        $("#form").html(two);
    });
});