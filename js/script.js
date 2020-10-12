//Variables globales
const contenido = document.querySelector("#contenido")

//Estableciendo conección con API de Marvel
const getConnection = () => {
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
};

const mostrarAvenger = e => {
    
    const imagen = `${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}`
    const avenger = `
    <div>  
        <h3>${e.name}</h3>
        <img src="${imagen}">
        <p>${e.description}</p>
    </div>
    `
    contenido.insertAdjacentHTML('beforeEnd', avenger) //inserts a text as HTML, into a specified position
}

getConnection()