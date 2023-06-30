//Mostra todas as empresas cadastradas no site
function IdEmpresaGetAll(el) {
  var element = el;
  $('.empresas').on('click', '#img-a', function () {

    // Obtém o ID da vaga a ser atualizada
    var empresaIdALL = element.parentNode.parentNode.parentNode.lastChild.firstChild.firstChild.innerHTML;
    //alert("++"+empresaIdALL)
    // Redireciona para a página de atualização com o ID da vaga na URL
    //window.location.href = '/z-Novo_TCC/atualizar/AtualizarVaga/atualizarVaga.html?id=' + empresaIdALL;
    window.location.href = '/z-Novo_TCC/Perfil/PerfilVisivelAosOutros/perfilEmpresaVisivelAoUsuario.html?id=' + empresaIdALL;

  });

}
/*localhost:  url: "http://localhost:8080/empresa",*/
function empresaGetAll() {
  $.ajax({
    url: "http://blueworks-production.up.railway.app/empresa",
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    data: {
      id_motor: $("#meuMotor").val()
    },
    success: function (response) {
      for (var i = 0; i < response.length; i++) {
        $('.empresas').append(' <div class="empresas-box"><div class="img-empresas"><div class="empresa"><a id="img-a" onclick="IdEmpresaGetAll(this)"><img class="img" src="data:image/png;base64,' + response[i].fotoBase64 + '" /></a></div></div><div class="empresas-box-info"><div class="inf-empresas"><div class="id-perto-nome-opacity">' + response[i].id + '</div><div class="bold name nameSearchEmpresa">' + response[i].nome + '</div> <div class="email"><span class="bold">Email: </span> ' + response[i].email + '</div><div class="info-empresa"><span class="bold"> Sobre: </span><p class="aboutSearchEmpresa">' + response[i].sobre + '</p></div></div></div></div> ');
      }
    },
    error: function (xhr, status) {
      //window.location.href = '/z-Novo_TCC/atualizar/AtualizarVaga/atualizarVaga.html';

      console.log(xhr);
      console.log(status);
    }
  });
}
//Mostra todas as empresas cadastradas no site FIM

//VER PERFIL DA VAGA

function VagaPerfil(el) {
  var element = el
  //alert("clicou no link")
  // Obtém o ID da vaga a ser atualizada
  var vagaId = element.parentNode.parentNode.parentNode.firstChild.innerHTML;
  //alert('id = ' + vagaId)

  window.location.href = '/z-Novo_TCC/Vaga/perfilVaga/vagaPerfil.html?id=' + vagaId;
}

var vagaId = new URLSearchParams(window.location.search).get('id');

function perfilVagaParaVisializar() {
  $.ajax({
    url: 'http://blueworks-production.up.railway.app/vagas/' + vagaId,
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      console.log(vagaId)
      console.log("Passou por aqui! 1")

      console.log("Passou por aqui! 2")
      //(condição) ? valor_se_verdadeiro : valor_se_falso;
      var status_vaga = response.status_vaga ? "ATIVA" : "INATIVA";
      if (status_vaga != "ATIVA") {
        document.getElementById("statusVagaDisponivel").style.backgroundColor = "red";

      }

      $('.perfil-vaga').append('<div class="detalhe"><div class="bunner"><div id="idPerfilVaga">' + response.id + '</div><img src="data:image/png;base64,' + response.fotoBase64 + '" alt="Bunner Vaga"></div><div class="detalhe-vaga"><div class="Info"><div class="all-Info"><div class="title"><h2>' + response.nome + '</h2></div><div class="apresentacao"><div class="status"><div class="statusVaga"><label for="status"><span class="bold">Status da Vaga: </span><span id="statusVagaDisponivel" class="disponivel">' + status_vaga + '</span></label></div><div class="statusVaga" id="estado"><label for="estado"> <span class="bold">' + response.cidade + ' - ' + response.uf + '</span></label></div><div class="salario-bruto"><label for="salario"><span class="bold">R$: ' + response.salario + ' </span></label></div></div></div></div></div></div></div><div class="detalhe-body"><div class="infVaga"><h2>Informação da vaga</h2><p>' + response.sobre + '</p><div class="infVaga2"><div class="numVagas space"><label for="numVagas"><span class="bold">Número de vagas:</span> ' + response.qtda + '</label></div><div class="tipo-contrato space"><label for="tipo"><span class="bold"> Tipo de contrato e Jornada:</span>' + response.contrato + '</label></div><div class="area-profis space"><label for="area"><span class="bold"> Área Profissional:</span>' + response.area + '</label></div><div class="exigencia space"><label for="exigencia"><span class="bold"> Exigências: </span></label>' + response.exigencias + '<ul><li><span class="ex">Escolaridade Mínima: </span>' + response.escolaridade + '</li></ul></div><div class="valorizado val-space space"><label for="valorizado"><span class="bold"> Valorizado: </span></label><ul><li>' + response.valorizado + '</li></ul></div></div></div><div class="inf-empresa"></div></div>');
      console.log("Passou por aqui! 3")

      console.log("Passou por aqui! 4")
    },
    error: function (xhr, status) {
      console.log(xhr);
      console.log(status);
    }
  });
}
//VER PERFIL DA VAGA FIM

//VER PERFIL USUARIO

function UsuarioPerfilPart1(el) {
  var element = el
  //alert("clicou no link")
  // Obtém o ID da vaga a ser atualizada
  var usuarioId = element.parentNode.parentNode.parentNode.parentNode.firstChild.innerHTML;
  //alert('id usuario parte 1= ' + usuarioId)
  window.location.href = '/z-Novo_TCC/Usuario/perfilUsuarioVisivelAEmpresa.html?id=' + usuarioId;
}
/* function UsuarioPerfilPart2(el) {
  var element = el
  //alert("clicou no link")
  // Obtém o ID da vaga a ser atualizada
  var usuarioId = element.parentNode.parentNode.parentNode.firstChild.innerHTML;
  alert('id usuario = parte 2' + usuarioId)

  //window.location.href = '/z-Novo_TCC/Vaga/perfilVaga/vagaPerfil.html?id=' + usuarioId;

} */
var usuarioId = new URLSearchParams(window.location.search).get('id');
//alert(usuarioId)
function PerfilUsuarioVisivelAEmpresa() {

  $.ajax({
    url: 'http://blueworks-production.up.railway.app/usuario/' + usuarioId,
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      $('.usuario-info').append('<div class="main-info"><div class="info"><div class="imgPerfilUsuario"><img src="data:image/png;base64,' + response.fotoBase64 + '"></div><div class="personal-info"><div class="info-0"><span class="name"><h2>' + response.nome + '</h2></span></div><div class="info-1"><label for="tel"><span class="bold"> Telefone: </span><span id="num">' + response.telefone + '</span></label></div><div class="info-1"><label for="mail"><span class="bold">Email: </span><span id="email">' + response.email + '</span></label></div><div class="info-1"><label for="addres"><span class="bold">Endereço: </span><span id="addres">' + response.cidade + ', ' + response.uf + '</span></label></div><div class="info-1"><label for="nasc"><span class="bold">Data de Nascimento:</span><span id="addres"> ' + response.nascimento + ' </span></label></div><div class="info-1"><label for="escola"><span class="bold">Escolaridade: </span><span id="escolaridade">' + response.escolaridade + ' </span></label></div></div></div></div><div class="main-info2"><div class="down-info"><div class="sobre-"><div class="mim"><div class="assunto"><h2>Sobre-mim</h2><p> ' + response.sobre + ' </p></div></div></div></div></div>');
    },
    error: function (xhr, status) {
      console.log(xhr);
      console.log(status);
    }
  });

}
// FIM VER PERFIL USUARIO
//Perfil admin crud vagas e usuarios
function AdminPerfilSobre(idEmpresaLogin) {
  $.ajax({
    url: "http://blueworks-production.up.railway.app/empresa/" + idEmpresaLogin,
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {

      //alert(idEmpresaLogin)
      var nomeParaApagarCookie = response.id

      $('.botao').append(' <div class="img-perfil-empresbottom-liid empresa cadastroa"><div class="dropdonw-img-config"><img class="img" id="imagem-PerfilEmpresa" src="data:image/png;base64,' + response.fotoBase64 + '" /><div class="submenu-hover"><div class="id-display-none">' + response.id + '</div><a class="submenu" id="editar-perfil-empresa"  onclick="AtualizarSobre(this)">Editar Perfil</a><a class="submenu" href="https://docs.google.com/forms/d/e/1FAIpQLSdmKc5bIUlHwOjqzNvCe7HPAhFkybvHoAIA2ckn4WMQ5ylpMA/viewform?usp=sf_link" target="_blank">Ajuda</a><a class="sairButton submenu" onclick="apagarCookie(\'' + nomeParaApagarCookie + '\')">Sair</a></div></div></div> ');

      $('.estatisticas').append(' <div class="sobre-empresa-perfil"><div class="first-empresa-sobre" id="id-empresa-perfil"><div class="id-Empresa-to-Show"  id="empresa-id-div"> Id= ' + response.id + '</div><h4>' + response.nome + '</h4><div class="sobre-exp">Porte: ' + response.porte + '</div></div><div class="second-empresa-sobre"><div class="sobre-exp">Email: ' + response.email + '</div><div class="sobre-exp">Cnpj: ' + response.cnpj + '</div><div class="sobre-exp">Cep: ' + response.cep + '</div></div></div><div class="qtda-estat"><div class="qtda-estatistica vistos-por-usuarios"><div class="ti"><h4> Quantos viram: </h4></div><div class="qtda-num qtda-usuarios-visto">0</div></div> <div class="qtda-estatistica vagas-cadastradas"><div class="ti"><h4> Vagas cadastradas: </h4></div><div class="qtda-num  vag-num">0</div></div><div class="qtda-estatistica usuarios-candidatados"><div class="ti"><h4> Candidatos a vaga: </h4></div><div class="qtda-num usuario-num">0</div></div></div> ');
      $('.id-Empresa-to-Showff').append('<div class="empresa-id-div" id="' + response.id + '">' + response.id + '</div>')
      $('.nomeEmpresaDeuLike').append('<div class="nomeEmpresa">' + response.nome + '</div>');

      obterIdEmpresaLoginAtual(response.id)
      manterLogado(response.id)
    },
    error: function (xhr, status) {
      console.log(xhr);
      console.log(status);
    }
  });

}
var idsVagasCadastradas = [];

function AdminPerfilVagas(idEmpresaLogin) {

  $.ajax({
    url: "http://blueworks-production.up.railway.app/vagas",
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {

      for (var i = 0; i < response.length; i++) {

        if (response[i].id_empresa === idEmpresaLogin) {
          var dataExibicao = response[i].data_publicacao;
          if (response[i].data_atualizacao) {
            dataExibicao = response[i].data_atualizacao + '*';
          }

          $('.crud-vagas').append(' <div class="crud-vagas-1-5 crud-vagas-1-6"><div class="id-vaga-to-delet-or-edit">' + response[i].id + '</div><div class="crud-vags-cadastradas-a-mostrar pesquisaVagasAdvanced"><div class="link perfilView"><button class="buttonPerfilView" onclick="VagaPerfil(this)"><div class="content-vagas name-content-wrap">' + response[i].nome + '</div></button></div><div class="link perfilView" id="backAtualizada"><button class="buttonPerfilView" onclick="VagaPerfil(this)"><div class="content-vagas dataExibicao">' + dataExibicao + '</div></button></div><div class="content-vagas"><div class="buttons"><div class="butt "><button class="edit" id="atualizarBtn" onclick="AtualizarVaga(this)"><a  rel="noopener noreferrer"> Editar </a> </button><button class="delet modal-button" id="open-modal" onclick="remove(this)"><a  rel="noopener noreferrer"> Excluir </a></button></div></div></div></div></div> ');
          /* edit   href="/z-Novo_TCC/atualizar/AtualizarVaga/atualizarVaga.html" */

          var idVagaCadastrada = response[i].id;
          idsVagasCadastradas.push(idVagaCadastrada);
          localStorage.setItem('idsVagasCadastradas', idsVagasCadastradas);
          //totVaga++;
        }
      }
      var idsVagasCadastradaCount = localStorage.getItem('idsVagasCadastradas');

      var arrayIdsVagasCadastradas = idsVagasCadastradaCount.split(",");
      var quantidadeIdsVagasCadastradas = arrayIdsVagasCadastradas.length;
      $('.vag-num').text(quantidadeIdsVagasCadastradas);

      //console.log("numero totVaga: " + totVaga)
      //$('.vag-num').append(totVaga);


    },
    error: function (xhr, status) {

      console.log(xhr);
      console.log(status);

    }
  });

}


function AdminPerfilUsuarios() {
  var usuarioLikedHTML = "";
  var usuarioAcceptedHTML = "";
  var usuariosAdicionados = {};

  $.ajax({
    url: "http://blueworks-production.up.railway.app/usuarioVaga/listarTodosUsuarioVaga",
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (usuarioVagaResponse) {
      var idsVagasCadastradas = localStorage.getItem('idsVagasCadastradas');

      var arrayIdsVagasCadastradas = idsVagasCadastradas.split(",");
      var quantidadeIdsVagasCadastradas = arrayIdsVagasCadastradas.length;


      var totalUsuarios = 0;
      var totalUsuariosVisualizaram = 0;
      var totalUsuariosVisualizaramOriginal = 0; // Armazena a contagem original de visualizações

      // Array de Promises para armazenar as chamadas AJAX
      var promises = [];
      var count = 0;

      var usuariosCandidatados = {};

      usuarioVagaResponse.forEach(function (candidatura) {
        if (idsVagasCadastradas.includes(candidatura.vaga_id)) {
          var idVaga = candidatura.vaga_id;
          var idUsuario = candidatura.usuario_id;

          if (!usuariosCandidatados[idVaga]) {
            usuariosCandidatados[idVaga] = []; // Inicializar array de usuários candidatados para a vaga
          }

          if (!usuariosCandidatados[idVaga].includes(idUsuario)) {
            usuariosCandidatados[idVaga].push(idUsuario);

            var promise = new Promise(function (resolve, reject) {
              $.ajax({
                url: "http://blueworks-production.up.railway.app/usuario/" + idUsuario,
                type: "GET",
                crossDomain: true,
                contentType: "application/json",
                dataType: "json",
                success: function (response) {

                  $.ajax({
                    url: "http://blueworks-production.up.railway.app/vagas/" + idVaga,
                    type: "GET",
                    crossDomain: true,
                    contentType: "application/json",
                    dataType: "json",
                    success: function (vagaNameResponseLigation) {

                      if (!usuariosAdicionados[response.id]) {
                        usuariosAdicionados[response.id] = true;
                        if (response.usuarioDipensado == false) {
                          totalUsuariosVisualizaramOriginal++
                          localStorage.setItem('totalUsuariosVisualizaramOriginal', totalUsuariosVisualizaramOriginal);
                          totalUsuarios++;
                          if (response.empresaDeuLike == false) {
                            console.log("id usuario gostei: " + idUsuario)
                            usuarioLikedHTML += '<div class="crud-vagas-1-5 crud-usuario-1-6"><div class="id-vaga-to-delet-or-edit idUsuarioCandidatadaAVaga" id="' + response.id + '">' + response.id + '</div><div class="crud-usuarios-candidatados-a-mostrar"><div class="link perfilView"><div class="nomeEmpresaDeuLike"><button class="buttonPerfilUserView butt1" onclick="UsuarioPerfilPart1(this)"><div class="content-vagas nomeUsuario">' + response.nome + '</div></button></div></div><div class="link perfilView"><button class="buttonPerfilUserView but22" onclick="UsuarioPerfilPart1(this)" disabled><div class="content-vagas nomeVaga">' + vagaNameResponseLigation.nome + '</div></button></div><div class="content-vagas" id="backgroundAccept"><div class="buttons"><div class="butt"><button class="edit" id="acceptDarLike" onClick="DarLike(this, \'' + response.id + '\', \'' + vagaNameResponseLigation.id_empresa + '\')"><a rel="noopener noreferrer"> Gostei </a> </button><button class="delet" onClick="rejectUser(this, \'' + response.id + '\', \'' + vagaNameResponseLigation.id_empresa + '\')"><a rel="noopener noreferrer"> Rejeitar </a></button></div></div></div></div></div>';
                          } else {
                            usuarioAcceptedHTML += '<div class="crud-vagas-1-5 crud-usuario-aprovado"><div class="id-vaga-to-delet-or-edit idUsuarioCandidatadaAVaga" id="' + response.id + '">' + response.id + '</div><div class="crud-usuarios-candidatados-a-mostrar"><div class="link"><div class="nomeEmpresaDeuLike"><button class="buttonPerfilUserView butt1" onclick="UsuarioPerfilPart1(this)"><div class="content-vagas nomeUsuarioAprovado">' + response.nome + '</div></button></div></div><div class="link"><button class="buttonPerfilUserView but22" onclick="UsuarioPerfilPart1(this)" disabled><div class="content-vagas nomeVagaAprovado">' + vagaNameResponseLigation.nome + '</div></button></div><div class="content-vagas"><div class="buttons"><div class="butt removeButt"><button class="removeButton" onclick="NaoDarLike(this, \'' + response.id + '\', \'' + vagaNameResponseLigation.id_empresa + '\')"><a rel="noopener noreferrer"> Remover </a></button></div></div></div></div></div>';
                          }
                          totalUsuariosVisualizaram++;
                        }
                      }
                      resolve(); // Resolve a Promise quando a chamada AJAX é concluída com sucesso

                    },
                    error: function (xhr, status) {

                      console.log(xhr);
                      console.log(status);

                    }
                  });

                },
                error: function (xhr, status) {
                  console.log(xhr);
                  console.log(status);
                  reject(); // Rejeita a Promise em caso de erro na chamada AJAX
                }
              });
            });

          }
          // Criar uma Promise para cada chamada AJAX


          promises.push(promise); // Adiciona a Promise ao array de Promises
        }
      });

      Promise.all(promises).then(function () {
        count++;

        var totalUsuariosVisualizaramOriginal = localStorage.getItem('totalUsuariosVisualizaramOriginal');
        var countTotalRejected = localStorage.getItem('countTotalRejected');


        if (countTotalRejected == 0 || countTotalRejected == null || isNaN(countTotalRejected)) {
          $('.qtda-usuarios-visto').text(totalUsuariosVisualizaramOriginal); // Exibir a contagem original
        } else {
          var countTotal = parseInt(totalUsuariosVisualizaramOriginal) + parseInt(countTotalRejected);
          $('.qtda-usuarios-visto').text(countTotal);
        }

        $('.usuario-num').text(totalUsuarios);

        // Adicionar o HTML dos usuários que não receberam like
        $('.crud-usuario').append(usuarioLikedHTML);
        $('.crud-aceitos').append(usuarioAcceptedHTML);
      }).catch(function () {
        alert("Erro ao carregar os usuários.");
      });
    },
    error: function (xhr, status) {
      console.log(xhr);
      console.log(status);
    }
  });
}






//========PUT TYPE FOR ATUALIZAR PERFIL EMPRESA========
var empresaId = localStorage.getItem('idEmpresaLogada');
function AtualizarSobre(el) {
  var element = el;
  $('.botao').on('click', '#editar-perfil-empresa', function () {

    // Obtém o ID da vaga a ser atualizada

    // Redireciona para a página de atualização com o ID da vaga na URL
    window.location.href = '/z-Novo_TCC/atualizar/AtualizarPerfil/AtualizarEmpresa.html?id=' + empresaId;

  });
}
var empresaId = localStorage.getItem('idEmpresaLogada');
//ATUALIZAR EMPRESA

var senha;
var confirmSenha;
var statusEmpresa = "ATIVA"

$.ajax({
  url: 'http://blueworks-production.up.railway.app/empresa/' + empresaId,
  type: 'GET',
  success: function (response) {
    // Popula os campos de formulário com os valores da vaga

    function formatCNPJ(cnpj) {
      if (!cnpj) return '';
      return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }

    function formatCEP(cep) {
      if (typeof cep === 'string') {
        return cep.replace(/^(\d{5})(\d{3})$/, '$1-$2');
      } else {
        return cep;
      }
    }


    $('#name').val(response.nome);
    $('#cnpj').val(formatCNPJ(response.cnpj));
    $('#porte').val(response.porte);
    $('#historia').val(response.sobre);

    $('#cep').val(formatCEP(response.cep));
    $('#rua').val(response.logradouro);
    $('#bairro').val(response.bairro);
    $('#cidade').val(response.cidade);
    $('#uf').val(response.uf);

    $('#numero').val(response.telefone);
    $('#email').val(response.email);

    senha = response.senha;
    confirmSenha = response.confirmSenha;



    //var image = new Image();
    //alert(response.fotoBase64)
    //image.src = 'data:image/png;base64,' + response.fotoBase64
    /* document.body.appendChild(image) */
    var imgElement = document.getElementById('frameEmpresaAtlz');
    imgElement.src = 'data:image/png;base64,' + response.fotoBase64;
    //$('#frame').val(image)

    var inputFile = document.getElementById('uploadImg');
    inputFile.addEventListener('change', function (event) {
      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (e) {
        var imgElement = document.getElementById('frameEmpresaAtlz');
        imgElement.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });

  },
  error: function (xhr, status) {
    alert('Erro ao carregar dados da vaga: ' + status);
  }
});



$('#atualizarEmpresa').on('click', function () {


  var name = $("#name").val();
  var cnpj = $("#cnpj").val();
  var porte = $("#porte").val();
  var historia = $("#historia").val();
  var email = $("#email").val();
  var cep = $("#cep").val();

  if (name == "" || name.length < 3) {
    return
  }
  if (cnpj == "" || cnpj.length < 18) {
    return
  }
  if (porte == "" || porte > 120) {
    return
  }
  if (historia == "" || historia.length < 5 || historia > 120) {
    sobreValidate()
    return
  }
  if (email == "") {
    return
  }
  if (cep == "" || cep.length < 9) {
    return
  }


  // Cria um objeto com os valores atualizados
  var dadosAtualizados = {
    nome: $("#name").val(),
    cnpj: $("#cnpj").val(),
    porte: $("#porte").val(),
    sobre: $("#historia").val(),
    cep: $("#cep").val(),
    logradouro: $("#rua").val(),
    bairro: $("#bairro").val(),
    cidade: $("#cidade").val(),
    uf: $("#uf").val(),
    telefone: $("#numero").val(),
    email: $("#email").val(),
    status_empresa: statusEmpresa,
    senha: senha,
    confirmSenha: confirmSenha,
    fotoBase64: $("#uploadImg").val()
  };

  var inputFile = document.getElementById('uploadImg');
  var file = inputFile.files[0]; // Obtém o arquivo selecionado

  if (file) {
    var formData = new FormData();

    formData.append('imagem', file);
    console.log(formData)
    // Adicione outros dados ao FormData, se necessário
    Object.entries(dadosAtualizados).forEach(([key, value]) => {
      formData.append(key, value);
      //console.log(key, value)
    });






    $.ajax({
      url: 'http://blueworks-production.up.railway.app/empresa/' + empresaId,
      type: "PUT",
      crossDomain: true,
      data: JSON.stringify(dadosAtualizados),
      contentType: "application/json",
      dataType: "json",

      success: function (response) {

        //var resp = JSON.parse(response)
        console.log("2")
        console.log(response);
        console.log("3")

        //location.href redireciona para a tela escolhida após o submit.
        location.href = "/z-Novo_TCC/Perfil/perfil.html?idEmpresaLogin=" + empresaId;
        uploadImagem(response.id, event);
      },

      //O ERRO 501 ESTÁ AQUI!!! ELE NÃO ATUALIZA POR CAUSA DISSO ABAIXO

    });

  } else {
    console.log("4")
    // Se nenhum arquivo foi selecionado, envie apenas os outros dados
    $.ajax({
      url: 'http://blueworks-production.up.railway.app/empresa/' + empresaId,
      type: 'PUT',
      data: JSON.stringify(dadosAtualizados),
      contentType: 'application/json',
      success: function (response) {
        // alert('Empresa atualizada com sucesso!');
        location.href = "/z-Novo_TCC/Perfil/perfil.html?idEmpresaLogin=" + empresaId;

      },
      error: function (xhr, status) {
        console.log("6")
        console.log('Erro ao atualizar a Empresa: ' + status);
      }
    });
  }
});

function uploadImagem(id, event) {

  let foto = document.getElementById("uploadImg").files[0];
  //var file = $('#uploadImg').attr('src', event.target.result);
  var data = new FormData();
  data.append('file', foto);

  jQuery.ajax({
    url: 'http://blueworks-production.up.railway.app/empresa/v2/image/upload/' + id,
    data: data,
    cache: false,
    contentType: false,
    processData: false,
    method: 'POST',
    type: 'POST', // For jQuery < 1.9
    success: function (data) {
      alert("Empresa cadastrada com sucesso!");
    }
  });
}
/* 
// Evento de clique no botão de atualizar
$('#atualizarEmpresa').on('click', function () {
  // Cria um objeto com os valores atualizados

  var dadosAtualizados = {
    nome: $("#name").val(),
    cnpj: $("#cnpj").val(),
    porte: $("#porte").val(),
    sobre: $("#historia").val(),
    cep: $("#cep").val(),
    logradouro: $("#rua").val(),
    bairro: $("#bairro").val(),
    cidade: $("#cidade").val(),
    uf: $("#uf").val(),
    numero: $("#numero").val(),
    email: $("#email").val(),

    fotoBase64: $("#uploadImg").val()

  };

  // Envia a solicitação PUT para atualizar a emepresa
  $.ajax({
    url: 'http://blueworks-production.up.railway.app/empresa/' + empresaId,
    type: 'PUT',
    data: JSON.stringify(dadosAtualizados),
    contentType: 'application/json',
    success: function (response) {
      //alert('Empresa atualizada com sucesso!');
      location.href = "/z-Novo_TCC/Perfil/perfil.html";
    },
    error: function (xhr, status) {
      console.log('Erro ao atualizar a Empresa: ' + status);
    }
  });
});
 */




//========FIM PUT TYPE FOR ATUALIZAR PERFIL EMPRESA========


/* 
//========PUT TYPE FOR ATUALIZAR VAGA========

function AtualizarVaga(el) {
  var element = el;
  $('.crud-vagas').on('click', '#atualizarBtn', function () {

    // Obtém o ID da vaga a ser atualizada
    var vagaId = element.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerHTML;
    // Redireciona para a página de atualização com o ID da vaga na URL
    window.location.href = '/z-Novo_TCC/atualizar/AtualizarVaga/atualizarVaga.html?id=' + vagaId;

  });
}


//ATUALIZAR VAGA
var vagaId = new URLSearchParams(window.location.search).get('id');

$.ajax({
  url: 'http://blueworks-production.up.railway.app/vagas/' + vagaId,
  type: 'GET',
  success: function (response) {
    // Popula os campos de formulário com os valores da vaga

    function formatCNPJ(cnpj) {
      if (!cnpj) return '';
      return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }

    function formatCEP(cep) {
      if (typeof cep === 'string') {
        return cep.replace(/^(\d{5})(\d{3})$/, '$1-$2');
      } else {
        return cep;
      }
    }

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const data = day + "/" + month + "/" + year;


    $('#name').val(response.nome);

    $('#type').val(response.tipo);

    $('#qtda').val(response.qtda);
    $('#salario').val(response.salario);
    $('#escolaridadeVaga').val(response.escolaridade);
    $('#area').val(response.area);
    $('#exigencia').val(response.exigencias);
    $('#valorizado').val(response.valorizado);
    $('#tipoContrato').val(response.contrato);

    $('#historia-vaga').val(response.sobre);
    $('#cnpj').val(formatCNPJ(response.cnpj));
    $('#cep').val(formatCEP(response.cep));
    $('#rua').val(response.logradouro);
    $('#bairro').val(response.bairro);
    $('#uf').val(response.uf);
    $('#cidade').val(response.cidade);

    //não dá o preview da imagem já cadastrada
    if (response.fotoBase64 !== undefined && response.fotoBase64.length > 0) {
      $('#frame').attr('src', 'data:image/png;base64,' + response.fotoBase64);
    }



  },
  error: function (xhr, status) {
    alert('Erro ao carregar dados da vaga: ' + status);
  }
});




// Evento de clique no botão de atualizar
$('#atualizarVaga').on('click', function () {
  // Cria um objeto com os valores atualizados
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const data = day + "/" + month + "/" + year;

  var dadosAtualizados = {
    nome: $("#name").val(),
    tipo: $("#type").val(),
    qtda: $("#qtda").val(),
    data: data,
    salario: $("#salario").val(),
    escolaridade: $("#escolaridadeVaga").val(),
    area: $("#area").val(),
    exigencias: $("#exigencia").val(),
    valorizado: $("#valorizado").val(),
    contrato: $("#tipoContrato").val(),
    sobre: $("#historia-vaga").val(),
    cnpj: $("#cnpj").val(),
    cep: $("#cep").val(),
    logradouro: $("#rua").val(),
    bairro: $("#bairro").val(),
    uf: $("#uf").val(),
    cidade: $("#cidade").val(),
    fotoBase64: $("#uploadImg").val()

  };

  // Envia a solicitação PUT para atualizar a vaga
  $.ajax({
    url: 'http://blueworks-production.up.railway.app/vagas/' + vagaId,
    type: 'PUT',
    data: JSON.stringify(dadosAtualizados),
    contentType: 'application/json',
    success: function (response) {
      alert('Vaga atualizada com sucesso!');
      location.href = "/z-Novo_TCC/Perfil/perfil.html";
    },
    error: function (xhr, status) {
      console.log('Erro ao atualizar a vaga: ' + status);
    }
  });
});
 */

//========END PUT TYPE FOR ATUALIZAR VAGA========



//========DELETE TYPE AND OPEN MODAL========
function openModal(button) {
  var modal = document.getElementById("modal");
  var fade = document.getElementById("fade");
  var closeBtn = document.getElementById("close-modal");
  var cancelBtn = document.getElementById("cancel-modal");
  // Adiciona um evento de clique ao botão de cancelar
  /*  cancelBtn.onclick = function () {
     console.log("voce foi descandidatado!")
     closeModal(modal, fade);
   } */
  closeBtn.onclick = function () {
    console.log("voce saiu!")
    closeModal(modal, fade);
  }
  // Exibe o modal e o fade
  modal.classList.remove("hide");
  fade.classList.remove("hide");
}
function closeModal(modal, fade) {
  // Oculta o modal e o fade
  modal.classList.add("hide");
  fade.classList.add("hide");
}
//Delete vagas!
function remove(el) {
  var element = el;
  // Obtém o ID da vaga a ser deletada
  var VagaId = element.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerHTML;

  // Exibe o modal antes de excluir a vaga
  openModal();
  // Adiciona um evento de clique ao botão de confirmar exclusão do modal
  var confirmBtn = document.getElementById("confirm-modal");
  confirmBtn.onclick = function () {

    $.ajax({
      url: 'http://blueworks-production.up.railway.app/vagas/' + VagaId,
      type: "DELETE",
      crossDomain: true,
      contentType: "application/json",
      dataType: "json",
      success: function (response) {
        // Remove a vaga da lista após excluí-la

        location.reload();
        element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode.parentNode.parentNode.parentNode);
        closeModal(document.getElementById("modal"), document.getElementById("fade"));
        location.reload();
      },
      error: function (xhr, status) {
        var json = JSON.parse(xhr.responseText);
        alert(json.mensagem);
      }
    });
  }
}
//========DELETE TYPE AND OPEN MODAL========



//=============Dar Like No Usuario================

/* function GetNameEmpresa(el) {
  var element = el;
  $('.buttons').on('click', '#acceptDarLike', function () {

    alert("aqui")

    //var empresaId = element.parentNode.firstChild.innerHTML;

  });
} */


function errorAlert() {
  const divMessage = document.querySelector(".alert");

  const msg = "Tente novamente";

  function ativar(msg) {
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = msg;
    divMessage.appendChild(message);

    setTimeout(() => {
      message.style.display = "none";
      window.location.reload();
    }, 1000);
  }
  ativar(msg);
}
//DAR LIKE NO USUARIO

function DarLike(el, usuarioId, empresaId) {
  var element = el;
  //alert("Deu Like!")

  // var UsuarioId = element.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerHTML;
  //var UsuarioNome = element.parentNode.parentNode.parentNode.parentNode.firstChild.lastChild.firstChild.innerHTML;

  var UsuarioId = usuarioId;
  var EmpresaId = empresaId;

  //console.log("usuario "+UsuarioId)
  //console.log("empresa "+EmpresaId)

  $.ajax({
    url: "http://blueworks-production.up.railway.app/empresa/" + EmpresaId,
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {

      var EmpresaNome = response.nome

      //console.log('usuario->' + UsuarioId + ' empresa->' + EmpresaNome,)

      $.ajax({
        url: 'http://blueworks-production.up.railway.app/usuario/darLikeEmUsuario/' + UsuarioId + '/' + EmpresaNome,
        type: "PUT",
        crossDomain: true,
        contentType: "application/json",
        success: function (response) {
          //alert(UsuarioId)
          element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode.parentNode.parentNode.parentNode);
          //alert(UsuarioId)
          window.location.reload();
          //alert(UsuarioId)
        },
        error: function (xhr, status) {

          errorAlert()
        }
      });

    },
    error: function (xhr, status) {
      console.log(xhr);
      console.log(status);
    }
  });

}

//DAR LIKE NO USUARIO FIM

// NAO DAR LIKE 

function NaoDarLike(el, usuarioId, empresaId) {
  var element = el;
  //alert("Deu Like!")


  var UsuarioId = usuarioId;
  var EmpresaId = empresaId;



  console.log('usuario->' + UsuarioId + ' empresa->' + EmpresaId,)

  $.ajax({
    url: "http://blueworks-production.up.railway.app/empresa/" + EmpresaId,
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {

      var EmpresaNome = response.nome

      //console.log('usuario->' + UsuarioId + ' empresa->' + EmpresaNome,)

      $.ajax({
        url: 'http://blueworks-production.up.railway.app/usuario/naodarLikeEmUsuario/' + UsuarioId + '/' + EmpresaNome,
        type: "PUT",
        crossDomain: true,
        contentType: "application/json",
        success: function (response) {

          element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode.parentNode.parentNode.parentNode);

          window.location.reload();

        },
        error: function (xhr, status) {

          errorAlert()
        }
      });

    },
    error: function (xhr, status) {
      console.log(xhr);
      console.log(status);
    }
  });

}

// FIM NAO DAR LIKE


function rejectUser(el, usuarioId, empresaId) {
  var element = el;

  var UsuarioId = usuarioId;
  var EmpresaId = empresaId;
  var countTotalRejected = 0;

  $.ajax({
    url: "http://blueworks-production.up.railway.app/empresa/" + EmpresaId,
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {

      var EmpresaNome = response.nome

      //console.log('usuario->' + UsuarioId + ' empresa->' + EmpresaNome,)

      $.ajax({
        url: 'http://blueworks-production.up.railway.app/usuario/dispensarUsuario/' + UsuarioId + '/' + EmpresaNome,
        type: "PUT",
        crossDomain: true,
        contentType: "application/json",
        success: function (response) {


          countTotalRejected++
          localStorage.setItem('countTotalRejected', countTotalRejected);

          window.location.reload();
          element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode.parentNode.parentNode.parentNode);

          //window.location.reload();

        },
        error: function (xhr, status) {
          /* alert('' + status + ' Tente novamente');
          window.location.reload(); */

          errorAlert()
        }

      });

    },
    error: function (xhr, status) {
      console.log(xhr);
      console.log(status);
    }
  });
}


function mostarCheckBox() {
  var checkBoxOptions = document.querySelector('.checkBoxOptions')

  checkBoxOptions.style.visibility = "visible"

}
function mostarCheckBoxUsuario() {
  var checkBoxOptionsUsuario = document.querySelector('.checkBoxOptionsUsuario')

  checkBoxOptionsUsuario.style.visibility = "visible"

}
function mostarCheckBoxUsuarioAprovado() {
  var checkBoxOptionsUsuario = document.querySelector('.checkBoxOptionsUsuarioAprovado')

  checkBoxOptionsUsuario.style.visibility = "visible"

}
function removeAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


function search_vaga() {
  let input = removeAcentos(document.getElementById('searchbar').value.trim().toLowerCase());
  let searchByName = document.getElementById('searchByName');
  let searchByDate = document.getElementById('searchByDate');
  let searchByBoth = document.getElementById('searchByBoth');
  let x = document.getElementsByClassName('crud-vagas-1-6');

  for (let i = 0; i < x.length; i++) {
    let animalName = removeAcentos(x[i].querySelector('.name-content-wrap').textContent.toLowerCase());
    let animalType = removeAcentos(x[i].querySelector('.dataExibicao').textContent.toLowerCase());

    if ((searchByName.checked && animalName.includes(input)) || (searchByDate.checked && animalType.includes(input)) || (searchByBoth.checked && (animalName.includes(input) || animalType.includes(input)))) {
      x[i].style.display = "flex";
    } else {
      x[i].style.display = "none";
    }
  }
}

function search_usuario() {
  let input = removeAcentos(document.getElementById('searchbarUsuario').value.trim().toLowerCase());
  let searchByName = document.getElementById('searchByNameUsuario');
  let searchByVaga = document.getElementById('searchByVagaUsuario');
  let searchByBoth = document.getElementById('searchByBothUsuario');
  let x = document.getElementsByClassName('crud-usuario-1-6');

  for (let i = 0; i < x.length; i++) {
    let animalName = removeAcentos(x[i].querySelector('.nomeUsuario').textContent.toLowerCase());
    let animalType = removeAcentos(x[i].querySelector('.nomeVaga').textContent.toLowerCase());

    if ((searchByName.checked && animalName.includes(input) && !searchByVaga.checked) ||
      (searchByVaga.checked && animalType.includes(input) && !searchByName.checked) ||
      (searchByBoth.checked && (animalName.includes(input) || animalType.includes(input)))) {
      x[i].style.display = "flex";
    } else {
      x[i].style.display = "none";
    }
  }
}
function search_usuarioAprovado() {
  let input = removeAcentos(document.getElementById('searchbarUsuarioAprovado').value.trim().toLowerCase());
  let searchByName = document.getElementById('searchByNameUsuarioAprovado');
  let searchByVaga = document.getElementById('searchByVagaUsuarioAprovado');
  let searchByBoth = document.getElementById('searchByBothUsuarioAprovado');
  let x = document.getElementsByClassName('crud-usuario-aprovado');

  for (let i = 0; i < x.length; i++) {
    let animalName = removeAcentos(x[i].querySelector('.nomeUsuarioAprovado').textContent.toLowerCase());
    let animalType = removeAcentos(x[i].querySelector('.nomeVagaAprovado').textContent.toLowerCase());

    if ((searchByName.checked && animalName.includes(input) && !searchByVaga.checked) ||
      (searchByVaga.checked && animalType.includes(input) && !searchByName.checked) ||
      (searchByBoth.checked && (animalName.includes(input) || animalType.includes(input)))) {
      x[i].style.display = "flex";
    } else {
      x[i].style.display = "none";
    }
  }
}

function search_empresa() {
  let input = removeAcentos(document.getElementById('searchbarEmpresa').value.trim().toLowerCase());
  let searchByName = document.getElementById('searchByNameEmpresa');
  let searchByAbout = document.getElementById('searchByAboutEmpresa');
  let searchByBoth = document.getElementById('searchByBothEmpresa');
  let x = document.getElementsByClassName('empresas-box');

  for (let i = 0; i < x.length; i++) {
    let animalName = removeAcentos(x[i].querySelector('.nameSearchEmpresa').textContent.toLowerCase());
    let animalAbout = removeAcentos(x[i].querySelector('.aboutSearchEmpresa').textContent.toLowerCase());

    if ((searchByName.checked && animalName.includes(input)) || (searchByAbout.checked && animalAbout.includes(input)) || (searchByBoth.checked && (animalName.includes(input) || animalAbout.includes(input)))) {
      x[i].style.display = "flex";
    } else {
      x[i].style.display = "none";
    }
  }
}

function toggleCheckboxes() {
  const checkboxGroup = document.querySelector('.checkbox-group');
  checkboxGroup.classList.toggle('active');
}
