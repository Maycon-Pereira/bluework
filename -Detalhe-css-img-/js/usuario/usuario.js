/* //Perfil usuario
function usuario() {

    $.ajax({
        url: "blonde-donkey-pmaycon63-f6d1bba7.koyeb.app/usuario/v2/image/download",
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {

            for (var i = 0; i < response.length; i++) {

                $('.usuario-info').append('<div class="main-info"><div class="info"><div class="img"><img src="data:image/png;base64,' + response[i].fotoBase64 + '" /></div><div class="personal-info"><div class="info-0"><span class="name"><h2>' + response[i].nome + '</h2></span></div><div class="info-1"><label for="tel"><span class="bold"> Telefone: </span><span id="num">' + response[i].telefone + '</span></label></div><div class="info-1"><label for="mail"><span class="bold">Email: </span><span id="email">' + response[i].email + '</span></label></div>       <div class="info-1"><label for="cep"><span class="bold">CEP: </span><span id="cep">' + response[i].cep + '</span></label></div>     <div class="info-1"><label for="addres"><span class="bold">Endereço:</span><span id="addres"> ' + response[i].bairro + ', ' + response[i].cidade + ', ' + response[i].uf + '</span></label></div>     <div class="info-1"><label for="cpf"><span class="bold">CPF: </span><span id="cpf">' + response[i].cpf + ' </span></label></div>     <div class="info-1"><label for="nasc"><span class="bold">Data de Nascimento:</span><span id="addres"> ' + response[i].data + ' </span></label></div>      <div class="info-1"><label for="escola"><span class="bold">Escolaridade: </span><span id="escolaridade">' + response[i].escolaridade + ' </span></label></div>        </div></div></div><div class="main-info2"><div class="down-info"><div class="atualiz"><a href="/Atualizar/perfilUsuario/AtualizarUsuario.html">Atualizar meu Perfil</a></div><div class="sobre-"><div class="mim"><div class="assunto"><h2>Sobre-mim</h2><p> ' + response[i].sobre + ' </p></div></div></div></div></div>');
            }

        },
        error: function (xhr, status) {

            console.log(xhr);
            console.log(status);

        }
    });

} */

/* function PerfilUsuarioVisivelAEmpresa() {

    $.ajax({
        url: "blonde-donkey-pmaycon63-f6d1bba7.koyeb.app/usuario/v2/image/download",
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {

            for (var i = 0; i < response.length; i++) {

                $('.usuario-info').append('<div class="main-info"><div class="info"><div class="img"><img src="data:image/png;base64,' + response[i].fotoBase64 + '" /></div><div class="personal-info"><div class="info-0"><span class="name"><h2>' + response[i].nome + '</h2></span></div><div class="info-1"><label for="tel"><span class="bold"> Telefone: </span><span id="num">' + response[i].telefone + '</span></label></div><div class="info-1"><label for="mail"><span class="bold">Email: </span><span id="email">' + response[i].email + '</span></label></div><div class="info-1"><label for="addres"><span class="bold">Endereço: </span><span id="addres">' + response[i].cidade + ', ' + response[i].uf + '</span></label></div><div class="info-1"><label for="nasc"><span class="bold">Data de Nascimento:</span><span id="addres"> ' + response[i].data + ' </span></label></div><div class="info-1"><label for="escola"><span class="bold">Escolaridade: </span><span id="escolaridade">' + response[i].escolaridade + ' </span></label></div></div></div></div><div class="main-info2"><div class="down-info"><div class="sobre-"><div class="mim"><div class="assunto"><h2>Sobre-mim</h2><p> ' + response[i].sobre + ' </p></div></div></div></div></div>');
            }

        },
        error: function (xhr, status) {

            console.log(xhr);
            console.log(status);

        }
    });

} */

