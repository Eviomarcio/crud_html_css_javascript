window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatros'];
var inputName = null
var isEditing = false;
var currentIndex = null;

function start(){
    inputName = document.querySelector('#inputName');    

    preventFormSubmit();
    activateInput();//Função para iniciar a pagina com o focus no campos de input
    render();    
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

    function insertName(newName){
        globalNames.push(newName);
    }

    function updateName(newName){
        globalNames[currentIndex] = newName  
    }

    function handleTyping(event){

        var hasText = !!event.target.value && event.target.value.trim() !== '';

        if(hasText){
            clearInput();
            return;
        }

        if(event.key === 'Enter'){
            if(isEditing){
                updateName(event.target.value);
            }else{
                insertName(event.target.value);
            }

            render();
            isEditing = false;
            clearInput();
        }
    }
}

function render(){
    //Cria a tag <ul>
    //Crai a tag <li> conforme o tamanho do vertor glabalNames

    var divNames = document.querySelector('#names');
    divNames.innerHTML = '';
    var ul = document.createElement('ul');
    
    for(var i = 0; i < globalNames.length; i++){
        var currentName = globalNames[i]; 
        var li = document.createElement('li');
        var button = createDeleteButton(i);
        var span = createSpan(currentName, i);      

        li.appendChild(button);
        li.appendChild(span);
        ul.appendChild(li);
    }

    divNames.appendChild(ul);
    clearInput();

    function createDeleteButton(index){
        function deleteName(){
            globalNames.splice(index, 1);
            render();
        }

        var button = document.createElement('button');
        button.classList.add('deleteButton');
        button.textContent = 'x';
        button.addEventListener('click', deleteName);
        return button;
    }

    function createSpan(name, index){
        function editItem(){
            inputName = name;
            inputName.focus();
            isEditing = true;
            currentIndex = index;
        }

        var span = document.createElement('span');
        span.classList.add('clickable');
        span.textContent = name;
        span.addEventListener('click', editItem);

        return span;
    }
}

function clearInput(){
    inputName.value = '';
    inputName.focus();
}