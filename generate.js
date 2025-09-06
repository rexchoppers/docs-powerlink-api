const fs = require("fs");

const registerClient = require("./methods/registerClient.json");
const info = require("./info.json");

const spec = {
    openrpc: "1.3.2",
    info,
    methods: [registerClient],
};

fs.writeFileSync("openrpc.build.json", JSON.stringify(spec, null, 2));
console.log("✅ Built openrpc.build.json");
