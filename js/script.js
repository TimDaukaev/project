

' use strict';



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false, 
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Слишком мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');   
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == "" || genre == null) {
                console.log('Вы ввели некорректные данные или отсавили строку пустой');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre; 
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
   }

};






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




// ******************************

// Callback функции

// function first() {
//     setTimeout(function (){
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();


// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);




// ******************************

// Объекты, дуструктуризация объектов (ES6)

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },
//     makeTest: function() {
//         console.log('Здорово');
//     }
// };

// // options.makeTest();

// const {border, bg} = options.colors;
// console.log(border, bg);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;
// console.log(options);

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
    
// }



// ********************************

// Массивы и псевдомассивы

// const arr = [1, 2, 3, 6, 8];

// // arr.forEach(function(item, i, arr) {
// //     console.log(`${i}: ${item} внутри массива ${arr}`);
// // });

// // // arr.pop();
// // // arr.push(10);

// // // console.log(arr);

// // // for (let i = 0; i < arr.length; i++) {
// // //     console.log(arr[i]);
// // // }

// // for (let value of arr) {
// //     console.log(value);
// // }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));



// let a = 5,
//     b = a;

//     b = b + 5;

//     console.log(b);
//     console.log(a);


//     const obj = {
//         a: 5,
//         b: 1,
//     };

    // const copy = obj;
    // copy.a = 10;

    // console.log(copy);
    // console.log(obj);

    // function copy(mainObj) {
    //     let objCopy = {};
        
    //     let key;
    //     for (key in mainObj) {
    //         objCopy[key] = mainObj[key];
    //     }

    //     return objCopy;
    // }

    // const numbers = {
    //     a: 2,
    //     b: 5,
    //     c: {
    //         x: 7,
    //         y: 4, 
    //     }
    // };

    // const newNumbers = copy(numbers);

    // newNumbers.a = 10;
    // newNumbers.c.x = 3;

    // // console.log(newNumbers);
    // // console.log(numbers);

    // const add = {
    //     d: 17,
    //     e: 20,
    // };

    // const clone = Object.assign({}, add);

    // clone.d = 20;

    // console.log(add);
    // console.log(clone);


    // 


    // *****************************

    // ООП

    // const solider = {
    //     health: 400,
    //     armor: 100,
    //     sayHello: function() {
    //         console.log('Hello');
    //     }
    // };

    // const john = Object.create(solider); / создание прототипа объекта

    // // const john = {
    // //     health: 100,
    // // };

   

    // // Object.setPrototypeOf(john, solider);

    // john.sayHello();