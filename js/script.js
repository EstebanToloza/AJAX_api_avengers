//Variables globales
const contenido = document.querySelector("#contenido")

//Estableciendo conección con API de Marvel
/* 
const cargarAvengers = async function(){

    try {

        const ts = Date.now() 
        const hash = MD5(ts + privateKey + publicKey)
        const URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
        const response = await fetch(URL)
        const fichas = await response.json()

        //console.log(fichas)

        const avengers = fichas.map( () => {
            const heroe = document.querySelector(".row").cloneNode(true)

            const imagen = `${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}`

            heroe.querySelector('img').src = imagen
            heroe.querySelector('.card-title').innerText = item.name
            heroe.querySelector('.card-text').innerText = item.description

            return heroe
        })

    } catch {
        alert("Problemas!")
    }
} */





const traerAvenger = () => {
    const ts = Date.now()
    const hash = MD5(ts + privateKey + publicKey) //Javascript no tiene un metodo md5, por lo que descargué el algoritmo que lo genera y este archivo lo llamé primero que el js
    const URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    fetch(URL)
        .then(response => response.json())
        .then(response => {
            response.data.results.forEach(e => {
                mostrarAvenger(e)
            })
        })

        const mostrarAvenger = e => {
        const imagen = `${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}`
        const avenger = 
            `
            <div class="tarjeta">
                <h3 class="nombre">${e.name}</h3>  
                <div class="avenger-img">
                    <img src="${imagen}" class="">
                    <p class="texto">${e.description}</p>
                </div>
            </div>
            `  
        contenido.insertAdjacentHTML('beforeEnd', avenger) //inserts a text as HTML, into a specified position
    }
}

//*col-lg-4 col-md-6 col-sm-12*/
traerAvenger()