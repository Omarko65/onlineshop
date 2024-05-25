const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'colmajikal', 'index.html'))
// });

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'))
})

app.get('/accessories', (req, res) => {
    res.sendFile(path.join(__dirname, 'accessories.html'))
})

app.get('/computing', (req, res) => {
    res.sendFile(path.join(__dirname, 'computing.html'))
})

app.get('/electronics', (req, res) => {
    res.sendFile(path.join(__dirname, 'electronics.html'))
})

app.get('/phones-and-tables', (req, res) => {
    res.sendFile(path.join(__dirname, 'phones-and-tables.html'))
})

app.get('/sign-in', (req, res) => {
    res.sendFile(path.join(__dirname, '/customer/account/index.html'))
})

app.get('/contact-us', (req, res) => {
    res.sendFile(path.join(__dirname, '/contact/index.html'))
})

app.listen(PORT, () => {
    console.log('Server is running on PORT 3000')
})