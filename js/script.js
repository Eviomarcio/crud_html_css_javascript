window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatros'];
var inputName = null

function start(){
    inputName = document.querySelector('#inputName');    

    preventFormSubmit();
    activateInput();//Função para iniciar a pagina com o focus no campos de input
    
}

function preventFormSubmit(){
    function handleFormSubmit(event){
        event.preventDefault();//Evita recarregar a pagina
    }
    var from = document.querySelector('form');//Pega referencia do form
    from.addEventListener('submit', handleFormSubmit);
}

function activateInput(){
    inputName.focus();
    inputName.addEventListener('keyup', handleTyping);

    function handleTyping(event){
        if(event.key === 'Enter'){
           insertName(event.target.value);
        }
    }

    function insertName(newName){
        globalNames.push(newName);
    }
}