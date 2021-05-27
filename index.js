'use strict';

const Hapi = require('@hapi/hapi');

var frontEndRoute = require('./routes/front-end/front-end');
var apiRoutes = require('./routes/api/api');
const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route(frontEndRoute);
    server.route(apiRoutes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();