const { response } = require('express')
const express = require('express')
const app = express()

var productos = [{
    "nombre": "Asus",
    "precio": 3000,
    "stock": "Disponible"
},
{
    "nombre": "BGH",
    "precio": 2000,
    "stock": "Disponible"
},
{
    "nombre": "MSI",
    "precio": 10000,
    "stock": "Sin Stock"
}]

const server = app.listen(8080, () => console.log('Server up'))

app.get('/', (request, response) => {
    response.send('<h1 style="color:blue">Bienvenidos al servidor Expres en color Azul</h1>')
})

app.get('/productos', (request, response) => {
    response.send({productos})
}) 

app.get('/productosRandom', (request, response) => {
    response.send(productos[Math.floor(Math.random() * productos.length)])
})

