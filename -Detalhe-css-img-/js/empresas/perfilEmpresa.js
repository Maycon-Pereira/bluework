//perfil da empresas

function perfilEmpresa() { //Ta dando erro

    $.ajax({
        url: "http://localhost:8080/empresa",
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
  
  
            for (var i = 0; i < response.length; i++) {
                
                $('.perfil-empresa').append('<div class="body-perfil"><div class="img"><img src="data:image/png;base64,' + response[i].fotoBase64 + '"></div><div class="nome-empresa"><h1>'+ response[i].nome +'</h1></div><div class="body-down"><div class="update"><div class="view"><div class="cadastrar"><a href="/Cadastros/Vagas/CadastroVaga.html"><span class="opcoes"> Cadastrar Vaga</span></a></div><div class="ed-perfil"><a href="/Atualizar/perfilEmpresa/AtualizarEmpresa.html"><span class="opcoes">Editar Perfil</span></a></div></div><div class="view"><div class="my-vaga"><a href="/Empresa/minhasVagas/minhasVagas.html"><span class="opcoes">Minhas Vagas</span></a></div><div class="perfil-candidato"><a href="/Candidatos/candidatos.html"><span class="opcoes">Perfils dos Candidatos</span><img src="/-Detalhe-css-img-/img/iconCand-removebg-preview.png"></a></div></div></div><div class="historia"><div class="text"><h2>Nossa Historia</h2><p>' + response[i].sobre + '</p></div></div></div>          <div class="inf-cadastrada"><div class=" bold inf-ti">Informações cadastradas:</div><div class="conjunt"><div class="informacao email"><p><span class="bold">Email: </span>' + response[i].email + '</p></div><div class="informacao cnpj"><p><span class="bold">Cnpj: </span> ' + response[i].cnpj + '</p></div><div class="informacao telefone"><p><span class="bold">Telefone: </span> ' + response[i].telefone + ' </p></div><div class="informacao endereco"><span class="endereco-title bold">Endereço</span><div class="espaco"><div class="espaco-inf"><p><span class="bold">Cep: </span> '+ response[i].cep +' </p></div><div class="espaco-inf"><p><span class="bold">Rua: </span>'+ response[i].logradouro +'</p></div><div class="espaco-inf"><p><span class="bold">Bairro: </span>'+ response[i].bairro +'</p></div><div class="espaco-inf"><p><span class="bold">Cidade: </span>'+ response[i].cidade +'</p></div><div class="espaco-inf"><p><span class="bold">Estado: </span>'+ response[i].uf +'</p></div></div></div><div class="informacao porte"><p><span class="bold">Porte da Empresa: </span>'+ response[i].porte +'</p></div></div></div>');
            }
  
        },
        error: function (xhr, status) {
  
            console.log(xhr);
            console.log(status);
  
        }
    });
  
  }