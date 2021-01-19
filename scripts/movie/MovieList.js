import { movieHTML } from "./Movie.js"
import { useMovieArray } from "./FundamentalDataProvider.js"


const domElement = document.querySelector("#movie-list")

export const movieList = () => {
    let htmlString = ""
    const moviesArray = useMovieArray()
    console.log(moviesArray)

    // for(const singleMovieObject of moviesArray){

    //     htmlString += movieHTML(singleMovieObject)
    // }

    // moviesArray.forEach(movieObject => {
    //     htmlString += movieHTML(movieObject)
    // })

    for(let i = 0; i < moviesArray.length; i++){
        htmlString += movieHTML(moviesArray[i])
    }

    domElement.innerHTML = htmlString

}