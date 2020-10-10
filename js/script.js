const privateKey = "8bae64f0b81256c18461d21f79ab1bbb3ea84897"
const publicKey = "b6a2ec37c446eab7659a6103b9868690"
const contenido = document.querySelector("#contenido")

const getConnection = () => {
    const ts = 1
    const hash = "f3e7b7eff63dd8fae6e070ce2dd407e9"
    const URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey${publicKey}&hash=${hash}`
    fetch(URL).then(response => console.log(response))
}

getConnection()