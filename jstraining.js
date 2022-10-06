function array () {
console.log(255, "folog", 2)
};
const elemby = 15;
console.warn(elemby);
array();

function helloWorld () {
let hello = "hello, its working at obuchenie";
let Hello = [02, ".", 10, ".", 2022];
Hello = (" 02.10.2022");
let HelLo=(hello + Hello);
console.warn(HelLo);
let ty = 'Привет! это тестовый WEB, ';
let Ty = 'пожалуйста, тыкайте осторожно!';
let Tyenter=(ty + Ty);
alert(Tyenter);
};
helloWorld();





function testLearnWhile () {
    //небольшой пример цикла while
    let i = 0;
    while (i < 3) {
        console.warn ( i );
        i++;
    };
    //тут совершается итерация цикла
    let itwo = 3;
    while( itwo ) {
       alert( itwo );
        itwo--;
    };
};
//testLearnWhile();
function testDoWhile () {
    let i = 0;
    do {
        alert( i );
        i++; // body iteration
    } while (i < 3); //condition
    //Цикл сначала выполнит тело, а затем проверит условие condition, 
    //и пока его значение равно true, он будет выполняться снова и снова.
};
//testDoWhile();
function testFor () {
   // for (начало; условие; шаг) {
        //body iteration
    //}
    for (let i = 0; i < 3; i++) {
        alert(i);
    };
    for ( let itwo = 0; itwo < 2; i++) {
        alert(' Отлично, js код FOR работает! ')
    };
    // for (let i = 0; i < 3; i++) alert(i)

/*// Выполнить начало
let i = 0;
// Если условие == true → Выполнить тело, Выполнить шаг
if (i < 3) { alert(i); i++ }
// Если условие == true → Выполнить тело, Выполнить шаг
if (i < 3) { alert(i); i++ }
// Если условие == true → Выполнить тело, Выполнить шаг
if (i < 3) { alert(i); i++ }
// ...конец, потому что теперь i == 3 */
};
//testFor();
function testBreakAndContinue () {
    //позволяет выйти из цикла в любой момент
    let sum = 0;
    while (true) {
        let value = +prompt("Введите число", '');
        if (!value) break; //*
        sum += value;
    
    }
    alert( 'Сумма: ' + sum );

    for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) continue;
        alert(i);
    }
    while ( i == 10 ) {
        alert(" Отлично, код BreakAndContinue работает! ")
    };
};
//testBreakAndContinue();