$(function(){
    
    $("#btnToggle").click(function(){
        
        $("#card1").fadeToggle(3000);
        $("#card2").fadeToggle(4000);
        $("#card3").fadeToggle(5000);

        // outro jeito de chamar:
        // $(".card:eq(0)").fadeToggle(3000);
        // $(".card:eq(1)").fadeToggle(4000);
        // $(".card:eq(2)").fadeToggle(5000);

        // outro efeito do toggle (sem fade):
        // $("#card1").toggle(3000);
        // $("#card2").toggle(4000);
        // $("#card3").toggle(5000);

    });

    $("#btnNovaLinha").click(function(){
        let novaLinha = $(".linha-de-cards").html();
        $("#btnToggle").before(novaLinha);
    });

});