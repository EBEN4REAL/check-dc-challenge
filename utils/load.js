const axios = require('axios');
const fs = require('fs')


const url = 'https://the-one-api.herokuapp.com/v1';
const token = 'dQo13KVcnXEtfhDSbkPD'
const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
    }
}

axios.get(`${url}/movie`, config)
    .then(movies => {
        fs.writeFileSync('movies.json', JSON.stringify(movies.data.docs))
    })
    .catch(e => console.log('this is the error', e))

axios.get(`${url}/character`, config)
    .then(characters => fs.writeFileSync('characters.json', JSON.stringify(characters.data.docs)))
    .catch(e => console.log('this is the error', e))