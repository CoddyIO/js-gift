$(".button2").click(function(){
    $(".button1").addClass("blue");
    $(this).fadeOut("slower");
    $(".first").fadeIn().text("Say yes to me");
    $(".first").addClass("color");
    
})
$(".button1").click(function(){
    $(".first").fadeIn().text("Good girl u did it great!");
    $(".first").addClass("color1");
    
})

