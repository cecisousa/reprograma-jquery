$(function () {
    $("#eventType").change(function () {
        let selected = $("#eventType :selected").val();
        if (selected == "Teatro") {
            $("#titulo").show();
            $("#sinopse").show();
            $("#texto").show();
            $("#concepcao").hide();
            $("#direcao").show();
            $("#livro").hide();
            $("#autor").hide();
            $("#moderador").hide();
            $("#curadoria").hide();
            $("#artista").hide();
            $("#elenco").show();
            $("#artistas-convidados").hide();
            $("#duracao").show();
            $("#classificacao").show();
            $("#valor-entrada").show();
            $("#entrada-franca").show();

        } else if (selected == "Cinema") {
            $("#titulo").show();
            $("#sinopse").show();
            $("#texto").hide();
            $("#concepcao").hide();
            $("#direcao").show();
            $("#livro").hide();
            $("#autor").hide();
            $("#moderador").hide();
            $("#curadoria").hide();
            $("#artista").hide();
            $("#elenco").show();
            $("#artistas-convidados").hide();
            $("#duracao").show();
            $("#classificacao").show();
            $("#valor-entrada").show();
            $("#entrada-franca").show();

        } else if (selected == "Debate Literário") {
            $("#titulo").show();
            $("#sinopse").hide();
            $("#texto").hide();
            $("#concepcao").hide();
            $("#direcao").hide();
            $("#livro").show();
            $("#autor").show();
            $("#moderador").show();
            $("#curadoria").hide();
            $("#artista").hide();
            $("#elenco").hide();
            $("#artistas-convidados").hide();
            $("#duracao").show();
            $("#classificacao").show();
            $("#valor-entrada").hide();
            $("#entrada-franca").show();

        } else if (selected == "Dança") {
            $("#titulo").show();
            $("#sinopse").show();
            $("#texto").hide();
            $("#concepcao").show();
            $("#direcao").show();
            $("#livro").hide();
            $("#autor").hide();
            $("#moderador").hide();
            $("#curadoria").hide();
            $("#artista").hide();
            $("#elenco").show();
            $("#artistas-convidados").hide();
            $("#duracao").show();
            $("#classificacao").show();
            $("#valor-entrada").show();
            $("#entrada-franca").show();

        } else if (selected == "Artes visuais e exposições") {
            $("#titulo").show();
            $("#sinopse").show();
            $("#texto").hide();
            $("#concepcao").hide();
            $("#direcao").hide();
            $("#livro").hide();
            $("#autor").hide();
            $("#moderador").hide();
            $("#curadoria").show();
            $("#artista").hide();
            $("#elenco").hide();
            $("#artistas-convidados").show();
            $("#duracao").hide();
            $("#classificacao").show();
            $("#valor-entrada").hide();
            $("#entrada-franca").show();
            
        } else if (selected == "Música") {
            $("#titulo").show();
            $("#sinopse").show();
            $("#texto").hide();
            $("#concepcao").hide();
            $("#direcao").hide();
            $("#livro").hide();
            $("#autor").hide();
            $("#moderador").hide();
            $("#curadoria").hide();
            $("#artista").show();
            $("#elenco").hide();
            $("#artistas-convidados").hide();
            $("#duracao").hide();
            $("#classificacao").show();
            $("#valor-entrada").show();
            $("#entrada-franca").show();

        } else {
            $("#titulo").hide();
            $("#sinopse").hide();
            $("#texto").hide();
            $("#concepcao").hide();
            $("#direcao").hide();
            $("#livro").hide();
            $("#autor").hide();
            $("#moderador").hide();
            $("#curadoria").hide();
            $("#artista").hide();
            $("#elenco").hide();
            $("#artistas-convidados").hide();
            $("#duracao").hide();
            $("#classificacao").hide();
            $("#valor-entrada").hide();
            $("#entrada-franca").hide();
        }

    });

    $("#eventType").change();

    $("#free").change(function(){
        if($(this).prop("checked") == true) {
            $("#valor-entrada").hide();
        } else {
            $("#valor-entrada").show();
        }
    });

    // segunda forma de fazer a função acima
    // $("#free").click(function () {
    //     $("#valor-entrada").toggle();
    // });

    $('form').submit(function (event){
        let valid = true;
        if ($("#title").is(":visible") && $("#title").val() == ""){
            $("#title").css("border", "1px solid red");
            $("#title").prop("placeholder", "Digite um texto válido");
            valid = false;
        }

        if ($("#synopsis").is(":visible") && $("#title").val() == ""){
            $("#synopsis").css("border", "1px solid red");
            $("#synopsis").prop("placeholder", "Digite um texto válido");
            valid = false;
        }

        if ($("#writer").is(":visible") && $("#title").val() == ""){
            $("#writer").css("border", "1px solid red");
            $("#writer").prop("placeholder", "Digite um texto válido");
            valid = false;
        }

        if ($("#director").is(":visible") && $("#title").val() == ""){
            $("#director").css("border", "1px solid red");
            $("#director").prop("placeholder", "Digite um texto válido");
            valid = false;
        }

        if ($("#classification").is(":visible") && $("#title").val() == ""){
            $("#classification").css("border", "1px solid red");
            valid = false;
        }

        if ($("#price").is(":visible") && $("#title").val() == ""){
            $("#price").css("border", "1px solid red");
            $("#price").prop("placeholder", "Digite um texto válido");
            valid = false;
        }

        if ($("#book").is(":visible") && $("#title").val() == ""){
            $("#book").css("border", "1px solid red");
            $("#book").prop("placeholder", "Digite um texto válido");
            valid = false;
        }

        if ($("#author").is(":visible") && $("#title").val() == ""){
            $("#author").css("border", "1px solid red");
            $("#author").prop("placeholder", "Digite um texto válido");
            valid = false;
        }

        if ($("#moderator").is(":visible") && $("#title").val() == ""){
            $("#moderator").css("border", "1px solid red");
            $("#moderator").prop("placeholder", "Digite um texto válido");
            valid = false;
        }

        if ($("#conception").is(":visible") && $("#title").val() == ""){
            $("#conception").css("border", "1px solid red");
            $("#conception").prop("placeholder", "Digite um texto válido");
            valid = false;
        }

        if ($("#curator").is(":visible") && $("#title").val() == ""){
            $("#curator").css("border", "1px solid red");
            $("#curator").prop("placeholder", "Digite um texto válido");
            valid = false;
        }

        if ($("#band").is(":visible") && $("#title").val() == ""){
            $("#band").css("border", "1px solid red");
            $("#band").prop("placeholder", "Digite um texto válido");
            valid = false;
        }

        if (valid == false) {
            event.preventDefault();
        }
    });
});

