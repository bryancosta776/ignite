import http from 'node:http'

const users = []


const server = http.createServer((req, res) =>{
    const {method, url } = req

    if(method === 'GET' && url === '/users'){
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }    
    if(method === 'POST' && url === '/users'){
        users.push({
            name: 'Bryan',
            Sobrenome: 'Costa'
        })

        return res.writeHead(201).end()
    }

    return res.writeHead(404).end('Failed')

    
})
console.log(users)


server.listen(8080, () => {
    console.log('inicialized')
})