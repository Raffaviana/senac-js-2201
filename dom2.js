const p = document.getElementById('paragrafo');

p.innerText = 'Meu Texto!';

if(confirm('Quer entrar com um valor?')){

    let valor = prompt(p.innerText);

    if (valor >= 0 && valor <= 10){

        p.innerText = '';

        for(valor >= 0; i < valor; i++){

            p.innerText = p.innerText + "Luiz Bono\n";
        }

    } else {

        p.innerText = 'Valor inválido';
    }
} else {
    p.innerText = 'Que pena que você não entrou com um valor :-(';
}