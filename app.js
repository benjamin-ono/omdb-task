let apikey = "25d513cc";

let input = document.querySelector('input');
let img = document.querySelector('img');

let movietitle = document.querySelectorAll('h3')[0];
let moviegenre = document.querySelectorAll('h3')[1];
let movieyear = document.querySelectorAll('h3')[2];
let movieplot = document.querySelectorAll('h3')[3];
let moviedirector = document.querySelectorAll('h3')[4];
let movieactors = document.querySelectorAll('h3')[5];
let movieAwards =  document.querySelectorAll('h3')[6];

function searchmovie() {
    let url = `http://www.omdbapi.com/?t=${input.value}&apikey=${apikey}&`;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            movietitle.innerHTML = "Title:" + data.Title;
            moviegenre.innerHTML = "Genre:" + data.Genre;
            movieyear.innerHTML = "Year:" + data.Year;
            movieplot.innerHTML = "Plot:" + data.Plot;
            moviedirector.innerHTML = "Director:" + data.Director;
            movieactors.innerHTML = "Actors:" + data.Actors;
            img.src = data.Poster;
            movieAwards.innerHTML = "Awards:" + data.Awards;
        });
}


