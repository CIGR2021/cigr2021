function carregar(){
    var msg = document.querySelector(".msg")
    var img = document.querySelector(".imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12){
        img.src = "img/manha.png"
        /*document.body.style.background = ""*/
    }else if (hora >= 12 && hora <=18 ){
        img.src = "img/tarde.png"
        document.body.style.background = "orange"
    }else{
        img.src = "img/noite.png"
        document.body.style.background = "gray"
    }
}