$(function(){

    let inputTabela = $("input[type='text']").parent();

    // também podemos fazer:
    // let inputTabela = $("input").filter('[type="text"]').parent();

    inputTabela.addClass("alert alert-info");

    $(".list-group-item").click(function(){
        $(this).removeClass("list-group-item-dark").addClass("list-group-item-info");
        $(this).siblings().removeClass("list-group-item-info").addClass("list-group-item-dark");
    });
    
    // também podemos fazer:
    // $(".list-group-item").on("click", function(){
    //     $(this).removeClass("list-group-item-dark").addClass("list-group-item-info");
    //     $(this).siblings().removeClass("list-group-item-info").addClass("list-group-item-dark");
    // });

});