$(function(){

    $(".btn").click(function(){
        
        $("#card1").slideDown(3000);
        $("#card2").slideDown(4000);
        $("#card3").slideDown(5000);

        $(".btn").removeClass("btn-primary");
        $(".btn").addClass("btn-secondary");
        $(".btn").attr("disabled", "true");

    });

    $(".card").click(function(){
        $(this).css("display", "none");
        // outra forma de fazer:
        // $(this).hide();
    });

});