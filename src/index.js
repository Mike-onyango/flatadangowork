// Your code here
let url = "http://localhost:3000/films"
//console.log(document.getElementById('films'))


document.getElementsByClassName('film item')[0].remove()
fetchMovies(url)


//Create fetch function
function fetchMovies(url){
    fetch(url)
    .then(response => response.json())
    .then(movies => {
        movies.forEach(movie => {
            displayMovie(movie)
           console.log(movie)
        });
    })
}

let movieTicketsSold=0;
let movieCapacity=0;

function displayMovie(movie) {
    let movi = document.createElement("li");
    movi.textContent = movie.title;
    movi.runtime = movie.runtime; 
    // Storing runtime in a data attribute
    movi.capacity = movie.capacity; 
    // Storing capacity in a data attribute
    movi.description = movie.description; 
    // Storing description in a data attribute
    movi.showtime = movie.showtime; 
    // Storing showtime in a data attribute
    movi.ticketsSold = movie.tickets_sold; 
    // Storing tickets_sold in a data attribute
    movi.poster = movie.poster;
     // Storing tickets_sold in a data attribute

    movi.addEventListener("click", updatetherest);
    movi.className = "filmitem";
    movi.id = movie.title;
    document.getElementById("films").appendChild(movi);
}

function updatetherest(event) {
    const movieTitle = event.target.textContent;
    const movieruntime = event.target.runtime;
     // Accessing runtime from data attribute
    movieCapacity = event.target.capacity;
     // Accessing capacity from data attribute
    const movieDescription = event.target.description; 
    // Accessing description from data attribute
    const movieShowtime = event.target.showtime;
     // Accessing showtime from data attribute
    movieTicketsSold = event.target.ticketsSold; 
    // Accessing tickets_sold from data attribute
    const moviePoster = event.target.poster; 
    // Accessing poster from data attribute
    
    alert("You clicked the movie with title: " + movieTitle);
    document.getElementById("title").textContent = ("["+movieTitle+"]")
    document.getElementById("runtime").textContent = "["+movieruntime+"] minutes"
    document.getElementById("film-info").textContent = movieDescription
    document.getElementById("showtime").textContent = ("["+movieShowtime+"]")
    document.getElementById("ticket-num").textContent = ("["+(movieCapacity-movieTicketsSold)+"]")
    document.getElementById("poster").src = moviePoster
}


document.getElementById("buy-ticket").addEventListener("click", updatebtn)
function updatebtn(event){
    let availableTickets =movieCapacity-movieTicketsSold
    if(availableTickets>1){
        movieTicketsSold +=1;
        availableTickets -=1;
    
    document.getElementById("ticket-num").textContent = "[" + availableTickets + "]";}
    else (document.getElementById("ticket-num").textContent = "[" + "SOLD OUT!!" + "]")}