const myFavoriteFilm = {
    title: "Pulp Fiction",
    release: 1994,
    director: "Quentin Tarantino",
    country: "USA",
};

myFavoriteFilm.revenue = 213928762;

myFavoriteFilm.nameOutput = function() {
    console.log(myFavoriteFilm.title);
}

myFavoriteFilm.nameOutput();

delete myFavoriteFilm.release;

console.log(myFavoriteFilm);
