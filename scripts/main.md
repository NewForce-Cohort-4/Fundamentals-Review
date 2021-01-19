console.log("Welcome to the main module")
import { useMovieArray } from "./FundamentalDataProvider.js"


const printHTML = () => {
    let HTMLString = ""
    const movieArray = useMovieArray()
    movieArray.forEach(x => {
        HTMLString += `<div class="card m-5" style="width: 18rem;">
        <img src="${x.image}" class="card-img-top" alt="movieImage">
        <div class="card-body">
          <h5 class="card-title">${x.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${x.director}</li>
          <li class="list-group-item">${x.rank}</li>
        </ul>
      </div>`
    })
    return HTMLString
}

document.querySelector("#container").innerHTML = printHTML()