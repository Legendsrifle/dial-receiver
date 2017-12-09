import express from 'express';
import EventEmitter from 'event-emitter-es6';
import GLOBAL_VARS from '../../global_vars'
import path from 'path';


class Youtube extends EventEmitter  {
    constructor() {
        super();
        let self = this;
        this.router = express.Router();

        this.router.get("/",
            (req,res) => {
                res.status(200);
                res.sendFile(path.resolve(__dirname, "AppInfo.xml"));
            });

        this.router.post("/",
            (req,res) => {
                req.on('data', function(chunk) {
                    req.rawBody += chunk;
                });
                req.on('end', function(chunk) {
                    let url = decodeURIComponent(req.rawBody.toString().split("rUrl=")[1]).split("&rId=")[0];
                    let pairCode = req.rawBody.toString().split("pairingCode=")[1].split("&theme")[0];
                    let rId = req.rawBody.toString().split("&rId=")[1];
                    self.emit("cast-received", `http://youtube.com/tv?pairingCode=${pairCode}`)
                    // youtube.com/tv?pairingCode=x
                });
                res.setHeader("LOCATION", `http://${GLOBAL_VARS.SERVER_IP}:${GLOBAL_VARS.APPINFO_PORT}/apps/YouTube/run`);
                res.status(201)
                res.end();
            });

        this.router.post("/run/hide",
            (req,res) => {
                self.emit("cast-hidden");
                res.status(200);
                res.end();
            });

        this.router.delete("/run",
            (req,res) => {
                self.emit("cast-stopped");
                res.status(200);
                res.end();
            });
    }
}
export default Youtube;
