// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangle = (a, b) => a * b;
console.log(rectangle(4, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (r) => r * Math.PI;
console.log(circle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (h, r) => 2 * Math.PI * r * (r + h);
console.log(cylinder( 10, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
let users = (array) => {
    for (const item of array) {
    console.log(item)
    }
}
users([
    {name: 'Valia', username: 'vali', password: 12341},
    {name: 'Denys', username: 'den', password: 12342},
    {name: 'Petro', username: 'pet', password: 12343},
    {name: 'Stepan', username: 'step', password: 12344},
    {name: 'Anna', username: 'ann', password: 12345},
    {name: 'Pavlo', username: 'pav', password: 12346},
    {name: 'Barbara', username: 'bar', password: 12347},
    {name: 'Mary', username: 'mar', password: 12348},
    {name: 'Olena', username: 'lena', password: 12349},
    {name: 'Alina', username: 'lina', password: 123410},
]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let parag = (text) => {
    document.write(`<p>${text}</p>`);
}
parag('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, vitae.');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let elements = (i) => {
    document.write(`<div>
        <ul>
            <li>${i}</li>
            <li>${i}</li>
            <li>${i}</li>
        </ul>
    </div>`);
}
elements('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, vitae.');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let element = (text, times) => {
    document.write(`<ul>`)
    for (let a = 0; a < times; a++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
element('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, vitae.', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let specific = (array) => {
    document.write(`<ul>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`)
}
specific ([1, 2, 3, 4, 'str', 'str2','str3', true, false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let array = (objects) => {
    document.write(`<ul>`)
    for (const item of objects) {
        document.write(`<li>${item.id} ${item.name} ${item.age}</li>`);
    }
    document.write(`</ul>`)
}
array ([
    {id: 1, name: 'vasya', age: 31,},
    {id: 2, name: 'petya', age: 30,},
    {id: 3, name: 'kolya', age: 29,},
    {id: 4, name: 'olya', age: 28,},
    {id: 5, name: 'max', age: 30,},
    {id: 6, name: 'anya', age: 31,},
    {id: 7, name: 'oleg', age: 28,},
    {id: 8, name: 'andrey', age: 29,},
    {id: 9, name: 'masha', age: 30,},
    {id: 10, name: 'olya', age: 31,},
    {id: 11, name: 'max', age: 31,}
]);

// - створити функцію яка повертає найменьше число з масиву
let min = (numbers) => {
    let a = numbers[0];
    for (const element of numbers) {
        if (element < a) {
            a = element;
        }
    }
    console.log(a)
}
min([1, 2, -10, -25, 3, 7, -11, 0]);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let b = 0;
    for (const arrElement of arr) {
        b = b + arrElement;
    }
    console.log(b);
}
sum([1, 2, 3, 4, 10, -5]);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr) => {
    let c = arr[1];
    arr[1] = arr[0];
    arr[0] = c;
    console.log(arr);
}
swap([11,22,33,44],0,1);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    if (exchangeCurrency === 'USD'){
        f = sumUAH / currencyValues[0].value;
    }
    else if (exchangeCurrency === 'EUR'){
        f = sumUAH / currencyValues[1].value;
    }
    console.log(f);
}
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');