const numberOfFilms = +promt('Сколько фильмов вы уже посмотрели?');
let personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const a = promt('Один из последних промотренных фильмов?', '');
      b = promt('На сколько оцените его?', '');
      c = prompt('Один из последних промотренных фильмов?', '');
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;