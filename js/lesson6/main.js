// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a = 'hello world';
console.log(a.length);
let b = 'lorem ipsum';
console.log(b.length);
let c = 'javascript is cool';
console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(a.toUpperCase());
console.log(b.toUpperCase());
console.log(c.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let aa = 'HELLO WORLD';
console.log(aa.toLowerCase());
let bb = 'LOREM IPSUM';
console.log(bb.toLowerCase());
let cc = 'JAVASCRIPT IS COOL';
console.log(cc.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.replaceAll(' ', ''));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let string = 'Ревуть воли як ясла повні';
let stringToarray = (str) => str.split(' ');
let array = stringToarray(string);
console.log(array);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
let newArray = numbers.map((value) => value.toString());
console.log(newArray);

// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
let ascending = nums.sort((a1, b1) => a1 - b1);
console.log(ascending);
let descending = nums.sort((a1, b1) => b1 - a1);
console.log(descending);

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let down = coursesAndDurationArray.sort((course1, course2) => course2.monthDuration - course1.monthDuration);
console.log(down);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(filter);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let objects = coursesAndDurationArray.map((value, index) => {
    return {id: index +1, title: value.title, monthDuration: value.monthDuration}
});
console.log (objects);


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
{cardSuit: 'spade', value: '6', color:'black'},
{cardSuit: 'spade', value: '7', color:'black'},
{cardSuit: 'spade', value: '8', color:'black'},
{cardSuit: 'spade', value: '9', color:'black'},
{cardSuit: 'spade', value: '10', color:'black'},
{cardSuit: 'spade', value: 'jack', color:'black'},
{cardSuit: 'spade', value: 'queen', color:'black'},
{cardSuit: 'spade', value: 'king', color:'black'},
{cardSuit: 'spade', value: 'ace', color:'black'},

{cardSuit:'diamond', value: '6', color:'red'},
{cardSuit:'diamond', value: '7', color:'red'},
{cardSuit:'diamond', value: '8', color:'red'},
{cardSuit:'diamond', value: '9', color:'red'},
{cardSuit:'diamond', value: '10', color:'red'},
{cardSuit:'diamond', value: 'jack', color:'red'},
{cardSuit:'diamond', value: 'queen', color:'red'},
{cardSuit:'diamond', value: 'king', color:'red'},
{cardSuit:'diamond', value: 'ace', color:'red'},

{cardSuit:'heart', value: '6', color:'red'},
{cardSuit:'heart', value: '7', color:'red'},
{cardSuit:'heart', value: '8', color:'red'},
{cardSuit:'heart', value: '9', color:'red'},
{cardSuit:'heart', value: '10', color:'red'},
{cardSuit:'heart', value: 'jack', color:'red'},
{cardSuit:'heart', value: 'queen', color:'red'},
{cardSuit:'heart', value: 'king', color:'red'},
{cardSuit:'heart', value: 'ace', color:'red'},

{cardSuit:'clubs', value: '6', color:'black'},
{cardSuit:'clubs', value: '7', color:'black'},
{cardSuit:'clubs', value: '8', color:'black'},
{cardSuit:'clubs', value: '9', color:'black'},
{cardSuit:'clubs', value: '10', color:'black'},
{cardSuit:'clubs', value: 'jack', color:'black'},
{cardSuit:'clubs', value: 'queen', color:'black'},
{cardSuit:'clubs', value: 'king', color:'black'},
{cardSuit:'clubs', value: 'ace', color:'black'}
];
// - знайти піковий туз
let cardSpade = cards.find(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(cardSpade)
// - всі шістки
let card6th = cards.filter(value => value.value === '6');
console.log(card6th)
// - всі червоні карти
let redCards = cards.filter(value => value.color === 'red');
console.log(redCards)
// - всі буби
let diamondCards = cards.filter(value => value.cardSuit === 'diamond');
console.log(diamondCards)
// - всі трефи від 9 та більше
let clubsCards = cards.filter(value => value.cardSuit === 'clubs' &&  ['9', '10','jack','queen','king', 'ace'].includes(value.value));
console.log (clubsCards)
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let redused = cards.reduce((pack, value) => {
    if (value.cardSuit === 'spade' ) {
        pack.spades.push(value);
    } else if (value.cardSuit === 'diamond') {
        pack.diamonds.push(value);
    } else if (value.cardSuit === 'heart') {
        pack.hearts.push(value);
    } else if (value.cardSuit === 'clubs') {
        pack.clubs.push(value);
    }
    return pack;
}, {spades:[], diamonds:[], hearts:[], clubs:[]});
console.log(redused);


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
let searchSass = coursesArray.filter(value => value.modules.includes('sass'));
console.log(searchSass);
// --написати пошук всіх об'єктів, в який в modules є docker
let searchDocker = coursesArray.filter(value => value.modules.includes('docker'));
console.log(searchDocker);