const Axios = require('axios');

const numbers = [
    Axios.get('http://localhost:3000/random'),
    Axios.get('http://localhost:3000/random'),
    Axios.get('http://localhost:3000/random'),
    Axios.get('http://localhost:3000/random'),
    Axios.get('http://localhost:3000/random'),
    Axios.get('http://localhost:3000/random'),
    Axios.get('http://localhost:3000/random'),
    Axios.get('http://localhost:3000/random'),
    Axios.get('http://localhost:3000/random'),
    Axios.get('http://localhost:3000/random'),
];

console.log('We want to retrieve 10 random numbers from a remote server');

Promise.all(numbers);