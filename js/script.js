const privateKey = "8bae64f0b81256c18461d21f79ab1bbb3ea84897"
const publicKey = "b6a2ec37c446eab7659a6103b9868690"
const contenido = document.querySelector("#contenido")

const getConnection = () => {
    const ts = Date.now()
    const hash = MD5(ts + privateKey + publicKey)
    const URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    fetch(URL).then(response => console.log(response))
    /* .then(response => response.json())
    .then(response => {
        console.log(response)
    }); */
};

getConnection()