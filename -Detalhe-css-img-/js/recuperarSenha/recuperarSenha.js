var email;
var RandoNumberConfirmation;

function recuperarSenha() {
  // Obter o valor do campo de email
  email = document.getElementById("emailRecuperarSenha").value;

  // Enviar solicitação AJAX para verificar se o email existe
  $.ajax({
    url: 'https://blueworks-production.up.railway.app/empresa/all',
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      // Verificar se o email existe na resposta
      var emailExiste = false;
      for (var i = 0; i < response.length; i++) {
        if (response[i].email === email) {
          emailExiste = true;
          break;
        }
      }

      // Se o email existe, exibir mensagem de sucesso
      if (emailExiste) {
        localStorage.setItem('emailRecuperarSenha', email);
        enviarEmail()

      } else {
        exibirMensagem("error", "O e-mail fornecido não foi encontrado.");
      }

    },
    error: function (xhr, status) {
      console.log(xhr);
      console.log(status);
    }
  });
}

function enviarEmail() {

  email = localStorage.getItem('emailRecuperarSenha');

  var email = localStorage.getItem('emailRecuperarSenha');


  RandoNumberConfirmation = Math.floor(Math.random() * (9999 - 1111 + 1)) + 1111;
  localStorage.setItem('RandoNumberConfirmation', RandoNumberConfirmation);

  $.ajax({
    url: "https://formsubmit.co/ajax/" + email,
    method: "POST",
    data: {
      name: "Recuperar Senha",
      message: "Seu Código de recuperação é: " + RandoNumberConfirmation
    },
    dataType: "json",
    success: function (response) {//alert("passou sucesso")
      // Ação de sucesso
      exibirMensagem("success", "Um e-mail com as instruções foi enviado para o seu endereço de e-mail.");
      window.location.href = "/z-Novo_TCC/recuperarSenha/codigoRecuperarSenha.html";
      
    },
    error: function (xhr, status, error) {
      // Ação de erro
      console.log(xhr);
      console.log(status);
      console.log(error);
      exibirMensagem("error", "Ocorreu um erro ao enviar o e-mail de recuperação.");
    }
  });
}
function exibirMensagem(tipo, texto) {
  var mensagemElement = document.getElementById("mensagem");
  mensagemElement.innerHTML = texto;
  mensagemElement.className = tipo;
}


document.getElementById("recuperarSenhaForm").addEventListener("submit", function (event) {
  event.preventDefault();
  recuperarSenha();
});

function digiteOCodigo() {
  var RandoNumberConfirmation = localStorage.getItem('RandoNumberConfirmation');
  var codigoInput = document.getElementById("codigoRecuperarSenha").value;

  if (codigoInput === RandoNumberConfirmation) {
    location.href = "/z-Novo_TCC/recuperarSenha/novaSenha.html";
  } else {
    exibirMensagem("error", "Ocorreu um erro ao confirmar o código, digite novamente.");
  }
}

function mudarSenha() {
  email = localStorage.getItem('emailRecuperarSenha');


  //Busaca o id da empresa que tem o email = email
  $.ajax({
    url: 'https://blueworks-production.up.railway.app/empresa/all',
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      var idDaEmpresaAtualizaSenha = 0;

      for (var i = 0; i < response.length; i++) {
        if (response[i].email === email) {
          idDaEmpresaAtualizaSenha = response[i].id;
          //alert(idDaEmpresaAtualizaSenha)
          break;
        }
      }

      if (idDaEmpresaAtualizaSenha) {
        //alert("id da empresa atualiza senha" + idDaEmpresaAtualizaSenha)


        $.ajax({
          url: 'https://blueworks-production.up.railway.app/empresa/' + idDaEmpresaAtualizaSenha,
          type: "GET",
          crossDomain: true,
          contentType: "application/json",
          dataType: "json",
          success: function (response) {
            var nome = response.nome
            var cnpj = response.cnpj
            var porte = response.porte
            var sobre = response.sobre
            var cep = response.cep
            var logradouro = response.logradouro
            var bairro = response.bairro
            var cidade = response.cidade
            var uf = response.uf
            var telefone = response.telefone
            var status_empresa = response.status_empresa
            var fotoBase64 = response.fotoBase64

            var senha = $('#password').val();
            var confirmSenha = $('#confirmPassword').val();

            if (senha !== confirmSenha) {
              exibirMensagem("error", "A senha e a confirmação de senha não coincidem.");
              return;
            }
            if (senha.length < 8 && confirmSenha.length < 8) {
              exibirMensagem("error", "A senha e a confirmação de senha tem que ser maior que 8 caracteres.");
              return;
            }
            if (senha == "" && confirmSenha == "") {
              exibirMensagem("error", "A senha e a confirmação de senha não podem estar vazio.");
              return;
            }
            


            var dadosAtualizados = {
              nome: nome,
              cnpj: cnpj,
              porte: porte,
              sobre: sobre,
              cep: cep,
              logradouro: logradouro,
              bairro: bairro,
              cidade: cidade,
              uf: uf,
              telefone: telefone,
              email: email,
              status_empresa: status_empresa,
              fotoBase64: fotoBase64,
              senha: senha,
              confirmSenha: confirmSenha
            };

            //var dadosAtualizados = JSON.parse(JSON.stringify(dadosAtualizados));
            //alert(dadosAtualizados)

            $.ajax({
              url: 'https://blueworks-production.up.railway.app/empresa/' + idDaEmpresaAtualizaSenha,
              type: "PUT",
              crossDomain: true,
              contentType: "application/json",
              dataType: "json",
              data: JSON.stringify(dadosAtualizados),
              success: function (response) {
                exibirMensagem("success", "Senha atualizada com sucesso.");
                window.location.href = "/z-Novo_TCC/Login/login.html";
                uploadImagem(response.id, fotoBase64);
              },
              error: function (xhr, status) {
                console.log(xhr);
                console.log(status);
                exibirMensagem("error", "Ocorreu um erro ao atualizar a senha.");
              }
            });


          },
          error: function (xhr, status) {
            console.log(xhr);
            console.log(status);
          }
        });



      } else {
        // O email não corresponde a nenhuma empresa
        console.log("Email não encontrado");
      }
    },
    error: function (xhr, status) {
      console.log(xhr);
      console.log(status);
    }
  });

}

function uploadImagem(id, fotoBase64) {
  $.ajax({
    url: 'https://blueworks-production.up.railway.app/empresa/v2/image/upload/' + id,
    type: 'POST',
    crossDomain: true,
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({ fotoBase64: fotoBase64 }),
    success: function (response) {
      console.log('Upload de imagem bem-sucedido:', response);
    },
    error: function (xhr, status) {
      console.log('Erro ao fazer upload de imagem:', xhr, status);
    }
  });
}