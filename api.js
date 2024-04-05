function getcharacters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character");
results
    .then(Response => Response.json())
    .then(data=>{
        done(data)

    });
}

getcharacters(data=>{
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`
        <article>

        <div class="image_container">

            <img src="${personaje.image}" alt ="personaje">

        </div>

        <h2>${personaje.name}</h2>
        <span> Especies: ${personaje.species}</span> <br>
        <span> Estado: ${personaje.status}</span> <br>
        <span> Id: ${personaje.id}</span> <br>
        <span> Genero: ${personaje.gender}</span> <br>
        
    </article>

        `);

        const main = document.querySelector("main");
        main.append(article);

    });

});