

' use strict';

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false, 
};


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

if (personalMovieDB.count < 10) {
    console.log('Слишком мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');   
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


console.log(personalMovieDB);


















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

// let num = 50;
// for (let i = 1; i < 10; i++) {
//     if (i === 6){
//         break;
//     }
//     console.log(i);
// }