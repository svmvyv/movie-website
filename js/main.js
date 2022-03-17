const API_KEY = 'c485dd249a7a925a38936033459731d5';
const IMG_URL = 'https://image.tmdb.org/t/p/original';


axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
    .then(function(response) {
        // handle success
        console.log(response.data.results);
        document.getElementById("trending-list").innerHTML = response.data.results.map(Item =>
            `   <div class="movie-card">
        <img src="${IMG_URL+Item.poster_path}" alt="movie poster" class="movie-poster">
        <div class="movie-info d-flex">
            <button type="button" class="btn-look btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Details
              </button>
             <div class="text-white p-1 float-end">
             <i class="bi bi-bookmark"></i>
             <i class="bi bi-heart"></i>
          </div>
        </div>
      


    </div>`
        )
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    });