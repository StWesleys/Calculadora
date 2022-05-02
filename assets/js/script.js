function adicionar(){
    var n1 = document.getElementById('val1').value;
    var n2 = document.getElementById('val2').value;
    var n3 = parseFloat(n1) + parseFloat(n2);

    document.getElementById('resultado').value = n3;
}

function subtrair(){
    var n1 = document.getElementById('val3').value;
    var n2 = document.getElementById('val4').value;
    var n3 = parseFloat(n1) - parseFloat(n2);

    document.getElementById('resultado2').value = n3;

    if(n3 < 0){
        resultado2.style.color="red";
    }

    else{
        resultado2.style.color="black";
    }
}

function multiplicar(){
    var n1 = document.getElementById('val5').value;
    var n2 = document.getElementById('val6').value;
    var n3 = parseFloat(n1) * parseFloat(n2);

    document.getElementById('resultado3').value = n3;
}

function divisao(){
    var n1 = document.getElementById('val7').value;
    var n2 = document.getElementById('val8').value;
    var n3 = parseFloat(n1) / parseFloat(n2);

    document.getElementById('resultado4').value = n3;
}

