import http from 'node:http'

const server = http.createServer((req, res) =>{
    return res.send('server')
})


server.listen(8080, () => {
    console.log('inicialized')
})