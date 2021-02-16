function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div.res")
    
    if (fano.value <0 || fano.value.length <= 0 || Number(fano.value) > ano || fano.value < 1905){
        alert("Verifique os dados e Tente Novamente!")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("Id", "foto")
        
        if (fsex[0].checked){
            if (idade >= 0 && idade < 12){
                gênero = "Criança"
                img.setAttribute ("src", "img/menino.png")
            }else if(idade < 21){
                gênero = "Jovem"
                img.setAttribute ("src", "img/jovem_homem.png")
                res.innerHTML = "Jovem"
            }else if(idade <= 50){
                gênero = "Adulto"
                img.setAttribute ("src", "img/adulto_homem.png")
                res.innerHTML = "Adulto"
            }else if(idade <= 115){
                gênero = "Idoso"
                img.setAttribute ("src", "img/idoso_homem.png")
                res.innerHTML = "Idoso"
            }else{
                res.innerHTML = "Verifique os dados e Tente Novamente!"
            }
        }else{
            if (idade >= 0 && idade < 12){
                gênero = "Criança"
                img.setAttribute ("src", "img/menina.png")
            }else if(idade < 21){
                gênero = "Jovem"
                img.setAttribute ("src", "img/jovem_mulher.png")
                res.innerHTML = "Jovem"
            }else if(idade <= 50){
                gênero = "Adulto"
                img.setAttribute ("src", "img/adulto_mulher.png")
                res.innerHTML = "Adulto"
            }else if(idade <= 115){
                gênero = "Idoso"
                img.setAttribute ("src", "img/idoso_mulher.png")
                res.innerHTML = "Idoso"
            }else{
                res.innerHTML = "Verifique os dados e Tente Novamente!"
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
