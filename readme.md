# DIAL-receiver 1.0.2
Simple module to accept DIAL cast requests from second screen devices.

###Version 1.0.2
- Only supports Youtube cast requests


###Example
===
```javascript
let DIALreceiver = require("dial-receiver");

// Called when the second screen device requests to launch Youtube
DIALreceiver.Youtube.on("cast-received", function(link) {
    // Show something like a browserwindow to load the tv link
}

// Called when the second screen device stops casting
DIALreceiver.Youtube.on("cast-stopped", function() {
    //Destroy player here
}

// Called when the second screen device requests the app to be hidden
DIALreceiver.Youtube.on("cast-hidden", function() {
    //Destroy player here
}

```
##Reference
- [DIAL protocol](http://www.dial-multiscreen.org/dial-protocol-specification)
