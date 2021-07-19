
// initialize express and redis
const express = require('express')
const redis = require('redis')
const app = express()
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
})

//set initial visit counts to 0
client.set('visits', 0);

//defining the root api
app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is: ' + visits)
        client.set('visits', parseInt(visits) + 1)
    })
})

//specifying the listening port at this container
app.listen(8081, ()=>{
    console.log('Listening on port 8081')
})