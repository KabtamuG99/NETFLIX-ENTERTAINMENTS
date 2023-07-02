import React, { useState,useEffect} from 'react'
import './row.css'
import axios from '../../axios';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";



const imgBase_url="https://image.tmdb.org/t/p/original"
function Row({ title, fechUrl, isLargeRow }) {
   const [movies, setMovie] = useState([]);


  const [trailerUrl, setTrailerUrl] = useState("");

     useEffect(() => {
       async function fechData() {
         const request = await axios.get(fechUrl);
         setMovie(request?.data.results);
         return request;
       }
       fechData();
     }, [fechUrl]);


       const handleclick = (movie) => {
         if (trailerUrl) {
           setTrailerUrl("");
         } else {
           movieTrailer(movie?.title || movie?.name || movie?.original_name)
             .then((url) => {
               const urlParams = new URLSearchParams(new URL(url).search);
               setTrailerUrl(urlParams.get("v"));

             })
             .catch((error) => console.log(error));
         }
       }; // need explanation refer commented note at the bottom line
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div>
      <h1>{title}</h1>

      <div className="row__posters">
        {movies?.map((movie) => (
          <img
            onClick={() => handleclick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${imgBase_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt="movie.name"
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row


// { 

// const handleclick = (movie) => {
//   if (trailerUrl) {
//     setTrailerUrl("");
//   } else {
//     movieTrailer(movie?.title || movie?.name || movie?.original_name)
//       .then((url) => {
//         const urlParams = new URLSearchParams(new URL(url).search);
//         setTrailerUrl(urlParams.get("v"));
//         console.log(urlParams);
//       })
//       .catch((error) => console.log(error));
//   }
// };
// Save to grepper
// The function handleclick is defined as a constant arrow function, taking a movie parameter.

// It starts with an if statement that checks if the trailerUrl state variable (presumably defined elsewhere) is truthy. If it is, it means there is already a trailer URL set, so the function calls setTrailerUrl("") to clear the trailer URL.

// If the trailerUrl is falsy, meaning there is no trailer URL set, the else block is executed.

// Inside the else block, it calls the movieTrailer function, passing in movie?.title || movie?.name || movie?.original_name. The ?. syntax is called the optional chaining operator, which allows accessing nested properties without causing an error if any intermediate property is null or undefined. It attempts to get the movie's title, name, or original name in order.

// The movieTrailer function appears to be an asynchronous function that returns a Promise. It is likely a custom function that fetches a trailer URL based on the movie name or title.

// A then block is chained to the movieTrailer function call. It receives the resolved value of the Promise, which in this case is the url of the trailer.

// Inside the then block, a new URL object is created with the url as the parameter. The URLSearchParams constructor is used to parse the query parameters from the url's search portion.

// The URLSearchParams object is stored in the urlParams constant.

// urlParams.get("v") is called to retrieve the value of the "v" parameter from the query string. It is assumed that this parameter contains the video identifier for the trailer.

// The video identifier is then set as the trailer URL by calling setTrailerUrl(urlParams.get("v")), presumably updating the state variable for the trailer URL.

// Finally, the function logs the urlParams object to the console.

// If any errors occur during the Promise chain, they are caught in the catch block, and the error is logged to the console.

// In summary, the handleclick function is responsible for toggling the trailer URL between empty and the URL of the movie trailer. If no trailer URL is currently set, it calls a custom movieTrailer function to fetch the trailer URL based on the provided movie object (using the title, name, or original name). It then extracts the video identifier from the trailer URL and updates the trailer URL state variable.

//   }  