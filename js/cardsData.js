const divClient = document.querySelector('#divClient');
const sectionNumbersCard = document.querySelector('#sectionNumbersCard');
const divMes = document.querySelector('#divMes')
const divAno = document.querySelector('#divAno')
const divCVV = document.querySelector('#divCVVCard')


titular.addEventListener('keyup', (event) =>{
    exibirDadosCartao(event.target.id , event.target.value);
});

numero.addEventListener('keyup',(event) =>{
    exibirDadosCartao(event.target.id , event.target.value);
});

mes.addEventListener('keyup',(event) =>{
    exibirDadosCartao(event.target.id , event.target.value);
});

ano.addEventListener('keyup',(event) =>{
    exibirDadosCartao(event.target.id , event.target.value);
});

cvv.addEventListener('keyup',(event) =>{
    exibirDadosCartao(event.target.id , event.target.value);
});


function exibirDadosCartao(idInput, valor){
    if(idInput === "titular"){
        divClient.innerText = valor;

    }else if(idInput === "numero"){
        let valorCartao = valor;
        let valorCartaoFormatado = valorCartao.substring(0,4) + "  " + valorCartao.substring(4,8) + "  " + valorCartao.substring(8,12) + "  " + valorCartao.substring(12,16);
        sectionNumbersCard.innerText = valorCartaoFormatado;

    }else if(idInput === "mes"){
        divMes.innerText = valor;

    }else if(idInput === "ano"){
        divAno.innerText = valor;

    }else if(idInput === "cvv"){
        divCVV.innerText = valor;
        
    }
}