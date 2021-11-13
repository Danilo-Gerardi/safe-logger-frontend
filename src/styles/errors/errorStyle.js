function error() {
    document.getElementById("email").style.borderColor = "red"
    document.getElementById("password").style.borderColor = "red"
    document.getElementById("email").placeholder = "Email incorreto"
    document.getElementById("password").placeholder = "Senha incorreta"

}

function removeRedBorder() {
    document.getElementById("email").style.borderColor = "#6d6d70"
    document.getElementById("password").style.borderColor = "#6d6d70"
    document.getElementById("email").placeholder = "Email"
    document.getElementById("password").placeholder = "Senha"
}

const errorStyles = [removeRedBorder, error]

export default errorStyles;