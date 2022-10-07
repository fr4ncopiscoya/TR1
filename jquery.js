$(function(){
    $("p").hide();
})
    
$("button").click(function(){
    $("p").slideDown();
});

$("button").dblclick(function(){
    $("p").fadeOut();
});


