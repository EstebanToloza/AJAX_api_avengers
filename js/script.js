//Variables globales
const contenido = document.querySelector("#contenido")

//Estableciendo conección con API de Marvel
const getConnection = () => {
    const ts = Date.now()
    const hash = MD5(ts + privateKey + publicKey) //Javascript no tiene un metodo md5, por lo que descargué el algoritmo que lo genera y este archivo lo llamé primero que el js
    const URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    fetch(URL).then(response => console.log(response))
};

getConnection()