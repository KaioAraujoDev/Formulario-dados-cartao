
titular.addEventListener('keyup', (event) =>{
    exibirDadosCartao(event.target.id , event.target.value);
});

numero.addEventListener('keyup',(event) =>{

});

mes.addEventListener('keyup',(event) =>{

});

ano.addEventListener('keyup',(event) =>{

});

cvv.addEventListener('keyup',(event) =>{

});



function exibirDadosCartao(idInput, valor){
    if(idInput === "titular"){
        const divClient = document.querySelector('#divClient');

        divClient.innerText = valor;
    }
}