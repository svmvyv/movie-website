fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c485dd249a7a925a38936033459731d5&language=en-US")
    .then(response => response.json())
    .then(data => console.log(data.genres))
    .catch(err => {
        console.error(err);
    });