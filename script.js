function Rating(movie) {
  if (movie == "") {
    return ("")
  } else {
    var api_key = ""
    var oldURL = "https://api.themoviedb.org/3/search/movie?api_key=";
    var ending1 = "&language=en-US&query="
    var ending2 = "&page=1&include_adult=true"
    var newURL = oldURL.concat(api_key, ending1, encodeURI(movie), ending2);
    var response = String(UrlFetchApp.fetch(newURL));
    var rating_1 = response.split("vote_average");
    var rating = rating_1[1].substring(2, 5);
    if (rating.substring(1, 2) == ",") {
      return ((rating.substring(0, 1)).concat(".0"))
    } else {
      return (rating);
    }
  }
}
