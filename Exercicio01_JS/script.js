//Initial Message
let initialMessage = alert(
    `Olá, seja bem-vindo(a)! Por favor, forneça dois números a seguir para realizar as seguintes operações matemáticas destes números:
    
    -Soma;
    -Subtração;
    -Multiplicação;
    -Divisão;
    -Resto da divisão;`);

//Nembers to be received
let firstNumber = Number(prompt("Por favor, insira abaixo o primeiro número: "));
let secondNumber = Number(prompt("Por favor, insira abaixo o segundo número: "));

//Calculations to be carried out
const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const divRest = firstNumber % secondNumber;

//Sum return
alert(`A soma dos dois números é: ${sum}`);

//Subtraction return
alert(`A subtração dos dois números é: ${sub}`);

//Multiplication return
alert(`A multiplicação dos dois números é: ${multi}`);

//Division return
alert(`A divisão dos dois números é: ${div}`);

//Remainder return
alert(`O resto da divisão dos dois números é: ${divRest}`);

//Check if sum is odd or even
if (sum%2==0){
    alert(`A soma dos dois números é par: ${sum}`)
}else{
    alert(`A soma dos dois números é ímpar: ${sum}`)
};

//Check if both numbers are equal or different
if (firstNumber == secondNumber) {
    alert("Os números inseridos são iguais.")
}else{
    alert ("Os números inseridos são diferentes.")
}