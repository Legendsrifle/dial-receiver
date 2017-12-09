import express from 'express';
import path from 'path';
import GLOBAL_VARS from './global_vars';

class DeviceDescription {
    constructor() {
        this.server = express();

        this.server.get("/info.xml",
            (req,res) => {
                res.status(200);
                res.setHeader("Application-URL", `http://${GLOBAL_VARS.SERVER_IP}:${GLOBAL_VARS.APPINFO_PORT}/apps`);
                res.sendFile(path.resolve(__dirname, "DeviceDescription.xml"));
            });

        this.server.listen(GLOBAL_VARS.DEVICEDESCRIPTION_PORT);
    }
}

export default DeviceDescription;