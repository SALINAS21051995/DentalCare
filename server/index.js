const server  = require('./config/server.js')

const http     = require('http').Server(server);

server.use('/api/patient', require('./routes/patient/patient.routes'));


//starting
http.listen(3000, () => {
    console.log('Listen 3000 port');
})

