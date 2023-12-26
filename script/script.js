let moviePrefix = `https://image.tmdb.org/t/p/w1280`;
let main = document.querySelector('main')
let maindata = "";
let getMovies = async () => {
    let apiURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`;
    let fetchData = await fetch(apiURL);
    let endGame = await fetchData.json();
    endGame.results.forEach((e, i) => {
        maindata = maindata +
            `<figure>
            <img src= "${moviePrefix}${e.poster_path}" alt="Title">
            <figcaption>
                ${e.title}
            </figcaption>
        </figure>`
    })

    main.innerHTML = maindata
}

window.addEventListener('load', () => {
    getMovies()
})