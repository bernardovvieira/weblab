function mediaEscolar() {

    var nome = document.getElementById("nome").value;

    var nota1 = prompt(nome + ", informe a primeira nota: ");
    var nota2 = prompt(nome + ", informe a segunda nota: ");
    var nota3 = prompt(nome + ", informe a terceira nota: ");

    var media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
    var media_round = +(media.toFixed(2))

    alert(nome + ", sua média final é de: " + media_round); 
}

function manipulacaoString() {

    var string = prompt("Informe uma string: ");

    var tamanho = string.length;
    var substring = string.substring(6, 12);
    var substi = string.replace("Maçã", "Morango");
    var upper = string.toUpperCase();
    var lower = string.toLowerCase();

    var texto1 = prompt("Concatenação, informe a primeira string: ");
    var texto2 = prompt("Informe a segunda string: ");
    var concatenado = texto1.concat(" ", texto2);

    var branco = string.trim();

    var pads = concatenado.padStart(20, prompt("Informe um novo início para a string: "));
    var pade = concatenado.padEnd(20, prompt("Informe um novo final para a string: "));
    var ind = string.charAt(prompt("Escolha a posição de um caracter do exemplo dado: "));
    var unic = string.charCodeAt(ind);

    alert("\nString: " + string + "\nTamanho: " + tamanho + "\nSubstring: " + substring + "\nString Substituída: " + substi + "\nUpper: " + upper + "\nLower: " + lower
    + "\nConcatenado: " + concatenado + "\nSem Espaços em Branco: " + branco + "\nString Preenchida (Início): " + pads + "\nString Preenchida (Fim): " + pade
    + "\nIndex: " + ind + "\nUnicode: " + unic);
     
}

function data() {
    var d = new Date();

    var semana = ["", "Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
    var dia = semana[d.getUTCDay()];

    var data = ((d.getDate() )) + "/" + ((d.getMonth() + 1)) + "/" + d.getFullYear();

    var hora = ((d.getHours() )) + ":" + ((d.getMinutes())) + ":" + d.getSeconds();

    var final = dia + " - " + data + " - " + hora;
    
    alert(final);
}

function idade() {

    var nasc = document.getElementById("nasc").value;
    
    var d = new Date();
    var ano = d.getFullYear();

    var idade = ano - parseInt(nasc);

    alert("Você possui " + idade + " anos.");
    
}

function nume() {

    var num = document.getElementById("numero").value;

    var x = Math.floor((Math.random() * 100) + 1);

    if (num == x) {
        var resultado = "Você acertou! O número era " + x;
    } else {
        var resultado = "Você errou... O número era " + x + ". Que tal tentar novamente?";
    }

    alert(resultado);

}

function imc() {

    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    var conta = parseInt(peso) / ((parseInt(altura) / 100) * (parseInt(altura) / 100));
    
    if (conta < 17.0) {
        var resultado = "Muito abaixo do peso. IMC: " + conta;
    } else if (conta > 17.0 && conta <= 18.49) {
        var resultado = "Abaixo do peso. IMC: " + conta;
    } else if (conta >= 18.5 && conta <= 24.99) {
        var resultado = "Peso normal. IMC: " + conta;
    } else if (conta >= 25.0 && conta <= 29.99) {
        var resultado = "Acima do peso. IMC: " + conta;
    } else if (conta >= 30.0 && conta <= 34.99) {
        var resultado = "Obesidade I. IMC: " + conta;
    } else if (conta >= 35.0 && conta <= 39.99) {
        var resultado = "Obesidade II (severa). IMC: " + conta;
    } else {
        var resultado = "Obesidade III (mórbida). IMC: " + conta;
    };

    alert(resultado);

}