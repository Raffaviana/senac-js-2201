//exemplo com httpcom request
document.querySelector('xhr').addEventListener('click', carregaConteudo);

function carregaConteudo(){
    const XHR = new XMLHttpRequest();

    XHR.open('GET', 'http://10.135.236.37:5500/aula10/ajax/conteudo.txt', true); // true = assincrono, sincrono está sendo descontinuado

    XHR.onload = function(){
        if(this.status === 200){//HTTP code 200 OK
            document.getElementById('exibe-conteudo-recuperado').innerText = this.responseText;
    }
    }

    XHR.send();//realiza a requiseção
}

//exemplo com fetch
document.querySelector('button').addEventListener('click', carregaConteudo);
function carregaConteudo(){
    fetch('conteudo.txt').then(function(resultado){
        return resultado.text();
    }).then(function(conteudo){
        document.getElementById('exibe-conteudo-recuperado').innerText = conteudo;
    });
}