function enviarSessao() {
    let txt_Login = document.getElementById("txt_Login");
    let div_session = document.getElementById("div_session");

    let sessao_digitada = sessionStorage.getItem(txt_Login.value);

    if(sessao_digitada == null) {

        sessionStorage.setItem(txt_Login.value, txt_Login.value);
        console.log("Sessão" + " " + txt_Login.value + " " + "foi logada com sucesso.");
        div_session.innerHtml += "<br/> \r\n" + txt_Login.value;

    } else {
        
        console.error("Não foi possível enviar o login" + txt_Login.value + ", pois já há uma sessão logada com esse login. ");
    }
}