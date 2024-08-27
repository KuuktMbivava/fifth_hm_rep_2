let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    if (!gameRun) {                                                                             
        gameRun = true;
        minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
        maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
        orderNumber = 1;
        orderNumberField.innerText = orderNumber;
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        answerField.innerText = `Вы загадали число ${answerNumber }?`;
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.random().toFixed(2);
            if (phraseRandom >=0 && phraseRandom <=0.33) {
                answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`
            } else if (phraseRandom >0.33 && phraseRandom <=0.66) {
                answerField.innerText = `НЕ ТО ЧИСЛО`
            } else {
                answerField.innerText = `Не правильно набрано ЧИСЛО!`
            }
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue == 0 && maxValue == 1){
            const phraseRandom = Math.random().toFixed(2);
            if (phraseRandom >=0 && phraseRandom <=0.33) {
                answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`
            } else if (phraseRandom >0.33 && phraseRandom <=0.66) {
                answerField.innerText = `НЕ ТО ЧИСЛО`
            } else {
                answerField.innerText = `Не правильно набрано ЧИСЛО!`
            }         
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        //answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        const phraseRandom = Math.random().toFixed(2);
            if (phraseRandom >=0 && phraseRandom <=0.33) {
                answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
            } else if (phraseRandom >0.33 && phraseRandom <=0.66) {
                answerField.innerText = `Да-Да, я всегда побеждаю!`
            } else {
                answerField.innerText = `И опять победа за мной`
            }         
        gameRun = false;
    }
})

