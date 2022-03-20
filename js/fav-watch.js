var faveArr = [];

function favMenu(movie_ID) {
    //SETTER
    faveArr.push(movie_ID)
    console.log(movie_ID)
    localStorage.setItem("favemovies", JSON.stringify(faveArr));

}

function getFav() {
    var x = JSON.parse(localStorage.getItem("favemovies"));
    console.log(x)

}


// // Getter
// fv_movie = [...JSON.parse(localStorage.getitem("favecard"))];




localStorage.setItem('myCat', 'Tom');