const buttonSubmit = document.querySelector('#buttonSubmit');

buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    validar();

  


})

function validar(){
     //const nome = document.querySelector('#titular');
    // const numero = document.querySelector('#numero');
    // const mes = document.querySelector('#mes');
    // const ano = document.querySelector('#ano');

    // console.log('to aqui');
    // console.log(nome.value);
    // console.log(numero.value);
    
    if(titular.value == ""){
        exibirErro(titular.id , "Titular inválido");
        
    }

    if(numero.value.length < 16){
        exibirErro(numero.id , "Número de cartão inválido");
    };

}

function exibirErro(id, msg){
    const campoErro = document.querySelector(`input#${id}`)
    const erro = document.querySelector(`#erro-${id}`);
    erro.innerText = msg;

    erro.classList.add('visible');
    campoErro.classList.add('outlineError');
    
}