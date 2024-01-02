// Guvi Day-6-Task
// Question: 1

class Movie{
    constructor(movietitle, moviestudio, movierating="PG") {
        this.title = movietitle;
        this.studio = moviestudio;
        this.rating = movierating;
    }
     get ratingMovie(){
        return this.rating
    }
}
const movie1 = new Movie("")
console.log(movie1)
const movie2 = new Movie("Casino Royale", "Eon Productions", "PG­13")
console.log(movie2)
console.log(movie1.rating);
console.log(movie2.title);
console.log(movie2.studio);
console.log(movie2.rating);