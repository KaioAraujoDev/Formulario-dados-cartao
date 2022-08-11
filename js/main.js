const buttonSubmit = document.querySelector('#buttonSubmit');

function buscaDataAtual(){
    const data =  new Date();
    dataAtual = data.getFullYear().toString();
    dataAtual = dataAtual.substring(dataAtual.length - 2,dataAtual.length);

    return dataAtual;

}


buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    resetaClasses();
    validar();

})

function resetaClasses() {
    //Removendo bordas 

    titular.classList.remove('borderError')
    numero.classList.remove('borderError')
    mes.classList.remove('borderError')
    ano.classList.remove('borderError')
    cvv.classList.remove('borderError')
    //Escondendo bloco de erro

    const erroTitular = document.querySelector('#erro-titular');
    const erroNumero = document.querySelector('#erro-numero');
    const erroData = document.querySelector('#erro-data');
    const erroCvv = document.querySelector('#erro-cvv');


    erroTitular.classList.remove('visible')
    erroNumero.classList.remove('visible')
    erroData.classList.remove('visible')
    erroCvv.classList.remove('visible')

}

function validar(){

    if(titular.value == ""){
        exibirErro(titular.id , "Titular inválido");
        
    }

    if(numero.value.length < 16){
        exibirErro(numero.id , "Número de cartão inválido");
    };

    if(mes.value == "" || mes.value > 12){
        exibirErro(mes.id, "Data inválida");
     }

    if((ano.value.length == 0 || ano.value.length > 2) || ( ano.value < buscaDataAtual() ) ){
        exibirErro(ano.id, "Data inválida");
    }
    if(cvv.value.length != 3){
        exibirErro(cvv.id, "CVV inválido");
    }
}

function exibirErro(id, msg){
    //selecionando o input a ser destado 

    const campoErro = document.querySelector(`input#${id}`)
    
    //selecionando o bloco de erro a ser alterado
    //caso seja um mês ou ano selecione o campo databa
    //se não selecione o campo com o seu id 

    let erro = ""
    
    if(id == "mes" || id == "ano"){
        erro = document.querySelector(`#erro-data`);
        
    }else{
        erro = document.querySelector(`#erro-${id}`);
        
    }
    erro.classList.add('visible');
    campoErro.classList.add('borderError');
    erro.innerText = msg;
    
}