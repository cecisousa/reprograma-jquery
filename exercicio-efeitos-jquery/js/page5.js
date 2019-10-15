$(function(){
    
    $("button").click(function(){
        let novaLinha = $(".linha-de-cards").html();
        $("button").before(novaLinha);
    });

});