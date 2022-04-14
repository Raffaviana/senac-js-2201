
const OBJ = {nome: "Bono", idade: 37}; //De objeto JSON para string

console.log(JSON.stringify(OBJ));


const STR = '{"nome": "Bono", "idade": 37}'; //De string para objeto JSON

console.log( JSON.parse(STR));


localStorage.setItem('nome', 'Bono');//mesma janela

const NOME = localStorage.getItem('nome', 'Bono');

console.log(NOME);

sessionStorage.setItem('idade', '37');//varias janelas

const IDADE = sessionStorage.getItem('idade');

console.log(IDADE);

document.querySelector('input.btn').addEventListener('click', function(e){
    e.preventDefault();

    const TAREFA = document.querySelector('#task').value;
    
    document.querySelector('#task').value = '';

    localStorage.setItem('tarefa', TAREFA);
});

const TRF = localStorage.getItem('tarefa');

if(TRF){
    document.querySelector('#exibe').innerText = TRF;
}//exibe o valor do input no localstore e mostra no amarzenamento local