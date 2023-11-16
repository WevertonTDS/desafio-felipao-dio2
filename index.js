let nome = "Weverton";

function subtrair(vitorias, derrotas){
    return vitorias - derrotas;
}

let resultado = subtrair(100, 5);

if (resultado <= 10){
    console.log("O " + nome + " venceu " + resultado + " vezes, ele é de FERRO!");
}

else if (resultado >= 11 && resultado < 20){
    console.log("O " + nome + " venceu " + resultado + " vezes, ele é de BRONZE!");
}

else if (resultado >= 21 && resultado < 50){
    console.log("O " + nome + " venceu " + resultado + " vezes, ele é de PRATA!");
}

else if (resultado >= 51 && resultado < 80){
    console.log("O " + nome + " venceu " + resultado + " vezes, ele é de OURO!");
}

else if (resultado >= 81 && resultado < 90){
    console.log("O " + nome + " venceu " + resultado + " vezes, ele é de DIAMANTE!");
}

else if (resultado >= 91 && resultado < 100){
    console.log("O " + nome + " venceu " + resultado + " vezes, ele é LENDÁRIO!");
}

else {
    console.log("O " + nome + " venceu " + resultado + " vezes, ele é IMORTAL!");
}

