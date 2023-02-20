// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arr = ['a', 'b', 1, 2, 3, true, false, 'eight', 'nine', 'ten'];
console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);
let book1 = {
    title: 'A',
    pageCount: 76,
    genre: 'novel'
}
let book2 = {
    title: 'B',
    pageCount: 32,
    genre: 'myth'
}
let book3 = {
    title: 'C',
    pageCount: 125,
    genre: 'tale'
}
let book4 = {
    title: 'A',
    pageCount: 76,
    genre: 'novel',
    authors: {
        name:'Anna',
        age: 43
    }
}
let book5 = {
    title: 'B',
    pageCount: 32,
    genre: 'myth',
    authors: {
        name:'Valia',
        age: 26
    }
}
let book6 = {
    title: 'C',
    pageCount: 125,
    genre: 'tale',
    authors: {
        name:'Denys',
        age: 32
    }
}
let user = [
    {name: 'Valia', username:'vali', password: 12341},
    {name: 'Denys', username:'den', password: 12342},
    {name: 'Petro', username:'pet', password: 12343},
    {name: 'Stepan', username:'step', password: 12344},
    {name: 'Anna', username:'ann', password: 12345},
    {name: 'Pavlo', username:'pav', password: 12346},
    {name: 'Barbara', username:'bar', password: 12347},
    {name: 'Mary', username:'mar', password: 12348},
    {name: 'Olena', username:'lena', password: 12349},
    {name: 'Alina', username:'lina', password: 123410},
];
console.log (user[0].password, user[1].password, user[2].password, user[3].password, user[4].password, user[5].password, user[6].password, user[7].password, user[8].password, user[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3;
    if (x !== 0){
        console.log('Правильно')
    }
    else {
        console.log('Неправильно')
    }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 59;
if (time >= 0 && time < 15) {
    console.log(`First`)
    } else if (time >= 15 && time < 30) {
        console.log(`Second`)
    } else if (time >= 30 && time < 45) {
        console.log(`Third`)
    } else if (time >= 45 && time < 60) {
        console.log(`Fourth`)
    }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 0;
if (day >= 1 && day < 10){
    console.log(`First`)
}   else if (day >= 10 && day < 20) {
    console.log(`Second`)
}   else if (day >= 20 && day < 31) {
    console.log(`Third`)
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let schedule = +prompt('enter number of day');
switch (schedule) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('?')
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = +prompt('enter the first number')
let b = +prompt('enter the second number')
if (a >= b){
    console.log(a)
}
else {
    console.log (b)
}


//     - є змінна хx, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let xx = 2;
i = xx || "default";
console.log(i)


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер')
} else if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер')
}