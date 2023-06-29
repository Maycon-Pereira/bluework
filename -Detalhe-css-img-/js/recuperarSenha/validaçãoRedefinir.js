form = document.getElementById('redefinirSenhaForm');
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".exception");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    passwordValidate()
    confirmPasswordValidate()
})

function passwordValidate() {
    if (campos[0].value.length < 8) {

        campos[0].style.border = '1px solid rgb(218, 21, 21)';
        spans[0].style.opacity = '1';

    } else {

        campos[0].style.border = '';
        spans[0].style.opacity = '0';

    }
}
function confirmPasswordValidate() {
    if (campos[1].value.length < 8) {

        campos[1].style.border = '1px solid rgb(218, 21, 21)';
        spans[1].style.opacity = '1';

    } else {

        campos[1].style.border = '';
        spans[1].style.opacity = '0';

    }
}