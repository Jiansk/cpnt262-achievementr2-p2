const movies = ["Parasyte", "Interstellar", "Coraline", "Pulp Fiction"];

movies[movies.length-1] = 'and '+movies[movies.length-1];
const string = movies.join(',');

console.log(movies);