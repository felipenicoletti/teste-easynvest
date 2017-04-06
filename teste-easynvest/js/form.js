//document.querySelector('form').onkeypress = function(){return false}

function validaCampo(input){
    if(input == 'txtCpf'){
        var cpf = document.getElementById(input).value;
        cpf = cpf.replace(/[^0-9]+/g, '');
        if(cpf.length > 3){
            cpf = cpf.substring(0,3)+'.'+cpf.substring(3);
        }
        if(cpf.length > 7){
            cpf = cpf.substring(0,7)+'.'+cpf.substring(7);
        }
        if(cpf.length > 11){
            cpf = cpf.substring(0,13);
            cpf = cpf.substring(0,11)+'-'+cpf.substring(11);
        }
        document.getElementById(input).value = cpf;
    }
    if(input == 'txtTelephone'){
        var fone = document.getElementById(input).value;
        fone = fone.replace(/[^0-9]+/g, '');
        if(fone.length > 2){
            fone = '('+fone.substring(0,2)+')'+fone.substring(2);
        }
        if(fone.length > 8){
            fone = fone.substring(0,13);
            fone = fone.substring(0,8)+'-'+fone.substring(8);
        }
        if(fone.length > 13){
            fone = fone.substring(0,14);
            fone = fone.replace(/[^0-9]+/g, '');
            fone = '('+fone.substring(0,2)+')'+fone.substring(2,7)+'-'+fone.substring(7);
        }
        document.getElementById(input).value = fone;
    }
    if(input == 'txtComplement'){
        var complement = document.getElementById(input).value;
        if(complement.length > 0){
            document.getElementById(input).classList.add('valid'); 
        } else {
            document.getElementById(input).classList.remove('valid'); 
        }
        
    }
}
function Adicionar(){

    
    var dadosJSON =  {
        "nome": document.getElementById('txtFullname').value,
        "cpf": document.getElementById('txtCpf').value.replace(/[^0-9]+/g, ''),
        "telefone": document.getElementById('txtTelephone').value.replace(/[^0-9]+/g, ''),
        "endereco": document.getElementById('txtAddress').value,
        "complemento": document.getElementById('txtComplement').value,
        "imagem": document.getElementById('uplImage').value
    };

    console.log(dadosJSON);

    arrayString = JSON.stringify(dadosJSON);
    nomeLS = "user"+document.getElementById('txtCpf').value.replace(/[^0-9]+/g, '');

    localStorage.setItem(nomeLS, arrayString);
}

function mostrarDados(){
    for(i=0;i<window.localStorage.length;i++){
        console.log(JSON.parse(window.localStorage[window.localStorage.key(i)]));
    }
}