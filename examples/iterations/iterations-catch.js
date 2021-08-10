const Axios = require('axios');
const { random } = require('lodash/fp');

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
    Axios.get('I am going to break your damn chain, you can beat for it'),
];

console.log('We want to retrieve 10 random numbers from a remote server');

Promise.all(numbers)
    .then((randomNumbers) => randomNumbers.map(({ data }) => console.log(data)))
    .catch(() => {
        console.error('Something went wrong but everything is under control');
        return [
            { data: random(0,10000)},
            { data: random(0,10000)},
            { data: random(0,10000)},
            { data: random(0,10000)},
            { data: random(0,10000)},
            { data: random(0,10000)},
            { data: random(0,10000)},
            { data: random(0,10000)},
            { data: random(0,10000)},
            { data: random(0,10000)},
            { data: random(0,10000)}
        ]
    })
    .then((randomNumbers) => randomNumbers.map(({ data }) => console.log(data)));