function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res  = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'bebehomem.jpg')
            } else if (idade < 18){
                // Jovem
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if (idade < 55){
                // Adulto
                img.setAttribute('src', 'adultohomem.jpg')
            } else {
                // Idoso
                img.setAttribute('src','idosohomem.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'bebemulher.jpg')
            } else if (idade < 18){
                // Jovem
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if (idade < 55){
                // Adulto
                img.setAttribute('src', 'adultomulher.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosomulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}