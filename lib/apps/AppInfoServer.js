"use strict";
import express from 'express';
import path from 'path';
import GLOBAL_VARS from "../global_vars"
import Youtube from './youtube';

class AppInfoServer {
    constructor() {
        this.server = express();

        this.server.get("/info.xml",
            (req,res) => {
                res.status(200);
                res.setHeader("Application-URL", `http://${GLOBAL_VARS.SERVER_IP}:${GLOBAL_VARS.APPINFO_PORT}/apps`);
                res.sendFile(path.resolve(__dirname, "AppInfoServer.xml"));
            });
        this.Youtube = new Youtube();
        this.server.use("/apps/youtube", this.Youtube.router);

        this.server.listen(GLOBAL_VARS.APPINFO_PORT);
    }
}

export default AppInfoServer;