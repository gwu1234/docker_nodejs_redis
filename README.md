# A simple demo how to configure two docker containers, Redis and Node.js 

This project is a demo how to configure an application with Redis and Node.js in 2 docker containers, 

one for redis and the other for Redis  

## How to configure 

this project uses docker-compose. It configures two services: redis-server, node-app. 

Each service takes one container 
   
## How to access Redis on Node.js

const client = redis.createClient({

    host: 'redis-server',

    port: 6379

})

the redis-server is configured at docker-compose.yml

## How to access Redis on Node.js

1)  docker-compose down

3) at chrome 

localhost:4001 
