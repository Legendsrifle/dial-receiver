import {Server } from 'node-ssdp';
import GLOBAL_VARS from './global_vars';

let server = new Server({
    location: `http://${GLOBAL_VARS.SERVER_IP}:${GLOBAL_VARS.DEVICEDESCRIPTION_PORT}/info.xml`,
    sourcePort: 1900
});


server.addUSN('upnp:rootdevice');
server.addUSN('urn:dial-multiscreen-org:service:dial:1');

server.start();

process.on('exit', function(){
    server.stop() // advertise shutting down and stop listening
});

export default server;