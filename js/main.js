const API_KEY = 'c485dd249a7a925a38936033459731d5';
const IMG_URL = 'https://image.tmdb.org/t/p/original';


axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
    .then(function(response) {
        // handle success
        console.log(response.data.results);
        document.getElementById("trending-list").innerHTML = response.data.results.map(Item =>
            `<div class="movie-card">
        <img src="${IMG_URL+Item.poster_path}" alt="movie poster" class="movie-poster">
        <div class="movie-info d-flex">
            <button type="button" class="btn-look btn-danger" data-bs-toggle="modal" data-bs-target="#detailCard" onclick="movieDeets(${Item.id})">
                Details
              </button>
             <div class="text-white p-1 float-end">
             <i class="bi bi-bookmark"></i>
             <i class="bi bi-heart"></i>
          </div>
        </div>
    </div>
    <div class="modal fade" id="detailCard" tabindex="-1" aria-labelledby="detailCard" aria-hidden="true">
  <div class="modal-dialog">
  </div>
  </div>
    
    `).join('')
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    });



// MOVIES CARDS NAMES

let actionCard = document.getElementById("action");
moviesCat(28, actionCard);

let comedyCard = document.getElementById("comedy");
moviesCat(35, comedyCard);

let crimeCard = document.getElementById("crime");
moviesCat(80, crimeCard);

let dramaCard = document.getElementById("drama");
moviesCat(18, dramaCard);

let animCard = document.getElementById("animation");
moviesCat(16, animCard);

let romCard = document.getElementById("romance");
moviesCat(10749, romCard);

function moviesCat(ID, card) {
    axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${ID}`)
        .then((response) => {
            console.log(response.data.results)
            card.innerHTML = response.data.results.map(item =>
                `  <div class="movie-card">
                <img src="${IMG_URL+item.poster_path}" alt="movie poster" class="movie-poster">
                <div class="movie-info d-flex">
                    <button type="button" class="btn-look btn-danger" data-bs-toggle="modal" data-bs-target="#detailCard" onclick="movieDeets(${item.id})">
                        Details
                      </button>
                     <div class="text-white p-1 float-end">
                     <i class="bi bi-bookmark"></i>
                     <i class="bi bi-heart"></i>
                  </div>
                </div>
            </div>
            <div class="modal fade" id="detailCard" tabindex="-1" aria-labelledby="detailCard" aria-hidden="true">
          <div class="modal-dialog">
          </div>
          </div>`


            ).join('')

        })
}



function movieDeets(MV_ID) {
    console.log(MV_ID, "ID");
    axios.get(`https://api.themoviedb.org/3/movie/${MV_ID}?api_key=${API_KEY}&append_to_response=videos,similar,credits`)
        .then((response) => {
            console.log(response.data)

            let item = response.data;
            let char = item.credits.cast;
            var charNames = [];
            for (var i = 0; i < 4; i++) {
                charNames.push(char[i].name);
            }
            let genre = response.data.genres;
            var genreList = genre.map((genre) => {
                return `${genre.name}`;
            }).join(" | ");
            let video = response.data.videos.results;
            console.log(video);
            let similarMovies = response.data.similar.results;
            console.log(similarMovies);
            var similarMoviesList = similarMovies.map((element) => {
                    return element;
                })
                // year
            let yearOf = response.data.release_date.substr(0, 4);
            // rating

            document.getElementById('detailCard').innerHTML =

                `<div class="card bg-dark text-white">
                <div class="card-body mv-container">
                    <img src="${IMG_URL+item.backdrop_path}" class="card-img" alt="...">
                    <div class="card-img-overlay ">
                        <div id="left">
                            <h1>${item.title}</h1>
                            <div id="info">
                                <ul id="menu">
                                    <li>${yearOf}</li>
                                    <li>${item.runtime} min </li>
                                    <li>${genreList}</li>
                                    <br>
                                    <li>Starring: ${charNames}</li>

                                </ul>
                            </div>
                            <div id="rating">
                                <h3>IMDb Rating:</h3>
                                <div id="rates"></div>
                            </div>
                        </div>
                        <div id="right">
                            ${item.overview}
                            <div id="trailer">
                                <i class="fa fa-play" aria-hidden="true"></i>
                                <h4>WATCH TRAILER
                                    <h4>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <h1>HELLOOO</h1>
                    </div>
                </div>
            </div>
       
        
            `

        })
}