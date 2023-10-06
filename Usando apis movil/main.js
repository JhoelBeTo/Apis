

const httpsRest = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      // console.log(json));
      let data=""
      for (let index = 0; index < json.length; index++) {
        const element = json[index];
        console.log(element.body);
        /*data+=`
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.body}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`*/
      data+=`
      <div class="container text-center">
      <div class="row align-items-start">
        <div class="col"> 
          <div class="card" style="width: 18rem;">
          <img src="img/robot1.webp" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.body}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">SABER MAS</a>
          </div>
        </div></div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="img/robot1.webp" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.body}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">SABER MAS</a>
            </div>
          </div>
        </div>
        <div class="col"> 
          <div class="card" style="width: 18rem;">
          <img src="img/robot1.webp" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.body}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">SABER MAS</a>
          </div>
        </div>
      </div>
      </div>
    </div>`
      }
      document.getElementById("cuerpo").innerHTML=data
    });
};

httpsRest();
