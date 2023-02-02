function verificar () {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        res.innerHTML = `Idade calculada: ${idade}`;
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                //Criança Masculino
                img.setAttribute('src', 'Img/Menino.jpg')
            } else if (idade < 21) {
                //Jovem Masculino
                img.setAttribute('src', 'Img/Homem_Jovem.jpg')
            } else if (idade < 50) {
                //Adulto Masculino
                img.setAttribute('src', 'Img/Homem.jpg')
            } else {
                //Idoso Masculino
                img.setAttribute('src', 'Img/Homem_Idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                //Criança Feminino
                img.setAttribute('src', 'Img/Menina.jpg')
            } else if (idade < 21) {
                //Jovem Feminino
                img.setAttribute('src', 'Img/Mulher_Jovem.jpg')
            } else if (idade < 50) {
                //Adulto Feminino
                img.setAttribute('src', 'Img/Mulher.jpg')
            } else {
                //Idoso Feminino
                img.setAttribute('src', 'Img/Mulher_Idosa.jpg')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        img.style = 'width: 250px; height: 250px; border-radius:50%;'
        res.appendChild(img);
    }
}