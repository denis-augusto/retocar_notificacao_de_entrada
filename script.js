function enviarMsg(){
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let modelo = document.getElementById("modelo").value;
    let placa = document.getElementById("placa").value;

    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    let hora = data.getHours();
    let minuto = data.getMinutes();

    if(dia < 10){
        dia = `0${dia}`;
    };

    if(mes < 10){
        mes = `0${mes}`;
    };
    
    if(hora < 10){
        hora = `0${hora}`;
    };
    
    if(minuto < 10){
        minuto = `0${minuto}`;
    };
    
    let mensagem = `Prezado(a), ${nome}!\nComo vai?\n\nRecebemos seu veículo ${modelo} de placa ${placa.toUpperCase()} em nossa oficina em ${dia}/${mes}/${ano} ${hora}:${minuto}.\nSeguem as fotos da entrada do veículo.\nAgradecemos a confiança e caso tenha qualquer dúvida por gentileza entrar em contato.\n\nObrigado!\n__________\n*Retocar Funilaria e Pintura*\n*CNPJ:* 11.181.361/0001-06\n*Telefone:* (11)46532470 / (11)46554886\n*E-Mail:* retocarreparos@gmail.com\n`;
    
    let mensagemCodificada = window.encodeURI(mensagem);

    window.location.href = `https://wa.me/55${telefone}?text=${mensagemCodificada}`;

    // window.alert(`${dia}/${mes}/${ano} ${hora}:${minuto} - ${nome} ${placa.toUpperCase()}`);

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("placa").value = "";
};