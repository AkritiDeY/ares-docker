const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

const URL = process.env.BACKEND_URL || 'http://localhost:8000/api';

const fetch = (...args) => 
    import('node-fetch').then(({default: fetch}) => fetch(...args));

app.get('/', async function (req, res) {
    const options = {
        method: 'GET',
    }

    fetch(URL, options)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error('error' + err));
    
    try {
        let response = await fetch(URL, options);
        response = await response.json();
        res.render('index', response);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(3000, () => {
    console.log(`Ares Frontend is successfully running on http://localhost:9000`);
});
