

function logar() {

    const login = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    
    localStorage.setItem('login', login);
    localStorage.setItem('senha', senha);

    var request = {
        "email": login,
        "senha": senha
    }

    //AJAX ESTÁ DANDO ERRO na validação!!!!
    $.ajax({
        url: "http://localhost:8080/login/efetuaLoginEmpresa",
        type: "POST",
        crossDomain: true,
        data: JSON.stringify(request),
        contentType: "application/json",
        dataType: "json",

        success: function (response) {
            adicionarCookie(response.id, response.id)
            exibirCookie(response.id)
            location.href = "/z-Novo_TCC/Perfil/perfil.html?idEmpresaLogin=" + response.id;
        },
        error: function (xhr, status) {
            console.log(xhr, status);

            if (login == "" && senha == "") {
                campos[0].style.border = '1px solid rgb(218, 21, 21)';
                spans[0].style.opacity = '1';
            
                campos[1].style.border = '1px solid rgb(218, 21, 21)';
                spans[1].style.opacity = '1';
            
            } else if (login == "" || login == null) {
                emailValidate();
            } else if (senha == "" || senha == null) {
                passwordValidate();
            } else {
                // Nenhum dos campos está correto
                campos[0].style.border = '1px solid rgb(218, 21, 21)';
                spans[0].style.opacity = '1';
            
                campos[1].style.border = '1px solid rgb(218, 21, 21)';
                spans[1].style.opacity = '1';
            }



            //return alert("Usuario ou senha invalido!");

        }
    });

}


form = document.getElementById('formLogin');
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".exception");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    emailValidate()
    passwordValidate()
})

function emailValidate() {

    const email = $('#email').val();


    if (!validEmail(email)) {
        campos[0].style.border = '1px solid rgb(218, 21, 21)';
        spans[0].style.opacity = '1';
    } else {
        campos[0].style.border = 'none';
        spans[0].style.opacity = '0';
    }
    return false;
}

function validEmail(email) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function passwordValidate() {
    //mudar o .length e o 8 para se o valor for igual a senha do banco de dados
    if (campos[1].value.length < 8) {

        campos[1].style.border = '1px solid rgb(218, 21, 21)';
        spans[1].style.opacity = '1';

    } else {

        campos[1].style.border = '';
        spans[1].style.opacity = '0';

    }
}