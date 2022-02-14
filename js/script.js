

' use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');


    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true, 
};




function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
       
       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
           personalMovieDB.movies[a] = b;
           console.log('Done');
           } else {
               console.log('Error');
               i--;
           }   
       }
}
rememberMyFilms();




function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Слишком мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');   
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();



function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);



function writeYourGenres() {
     for (let i = 1; i <= 3; i++) {
         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
         personalMovieDB.genres[i - 1] = genre; 
     }
}
writeYourGenres();

console.log(personalMovieDB);



// *******************************************************************************************************************************************************

// ******************************


// // условия 
// if (4 == 9) {
//     console.log('ok');
// } else {
//     console.log('no!');
// }


// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }




// ******************************

// циклы 

// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// let num = 50;
// do {
//     console.log(num);
//     num++;
// } 
// while (num < 55);


// самая часто применяемый пример цикла!!!!!!!!!!!!!!!!!!!
// let num = 50;
// for (let i = 1; i < 10; i++) {
//     if (i === 6){
//         break;
//     }
//     console.log(i);
// }




// ******************************

// Функции, стрелочные функции
// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     num = 10;
    
// }

// showFirstMessage('Hello world!');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 9));
// console.log(calc('Hello ', 'world!'));


// function ret() {
//     let num = 33;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);



// const logger = function() {
//     console.log('Hello world!');
// };

// logger();

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };



// ******************************
// Методы и свойства строк и чисел

// const str = 'test';


// console.log(str.toUpperCase());
// console.log(str);

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));


// const logg = 'у тебя все получится';
// console.log(logg.slice(7, 20));

// const num = 12.6;
// console.log(Math.round(num));