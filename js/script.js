window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatros'];
var inputName = null

function start(){
    inputName = document.querySelector('#inputName');    
    
    preventFormSubmit();
    activateInput();
    
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
}