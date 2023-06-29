//imagem do candidatos
function candidatoImg() {

    $.ajax({
        url: "http://localhost:8080/usuario/v2/image/download",
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {


            for (var i = 0; i < response.length; i++) {

                $('.candidatos').append(' <div class="candidato-box"><div class="img-candidato"><div class="candidato" id="div_imagetranscrits"><a href="/Usuario/Perfil-Usuario/perfilUsuario.html"><img src="data:image/png;base64,' + response[i].fotoBase64 + '" /></a></div></div><div class="candidato-box-info"><div class="inf-pessoa"><div class="part-1"><div class="grid-1"><div class="inf-ap" id="nome-ap"><p><span class="bold">Nome: </span> ' + response[i].nome + ' </p></div><div class="inf-ap" id="telefone-ap"><p><span class="bold">Telefone: </span> ' + response[i].telefone + ' </p></div></div><div class="grid-2"><div class="inf-ap" id="escolaridade-ap"><p><span class="bold">Escolaridade: </span> ' + response[i].escolaridade + ' </p></div><div class="inf-ap" id="cidade-ap"><p><span class="bold">Cidade: </span> ' + response[i].cidade + ' </p></div><div class="inf-ap" id="estado-ap"><p><span class="bold">Estado: </span> ' + response[i].uf + ' </p></div></div><div class="grid-sobre"><div class="inf-ap" id="sobre-ap"><p><span class="bold">Sobre: </span> ' + response[i].sobre + ' </p></div></div></div><div class="part-2"><div class="escolha"><div class="buttam"><button class="button-342"><img src="/-Detalhe-css-img-/img/like-removebg-preview.png"></button></div><div class="buttam"><button class="button-343">X</button></div></div></div></div></div></div> ');
            }

        },  
        error: function (xhr, status) {

            console.log(xhr);
            console.log(status);

        }
    });

}

