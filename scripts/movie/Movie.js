


export const movieHTML = (movieObject) => {
    return `<div class="card m-5" style="width: 18rem;">
    <img src="${movieObject.image}" class="card-img-top" alt="movie poster">
    <div class="card-body">
      <h5 class="card-title">${movieObject.title}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

      </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Director: ${movieObject.director}</li>
      <li class="list-group-item">Rank: ${movieObject.rank}</li>
    </ul>
    <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  </div>`
}