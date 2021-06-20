$(".div1").ready(function(){
    $(".div1").click(function(){
        console.log("done")
        $(".red").animate({
            left:"-=1000px"},1000);
        $("p").animate({
            opacity:"1"},4000);
        $("a").show();
});
});

$("a").hide();