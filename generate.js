const fs = require("fs");

const registerClient = require("./methods/registerClient.json");
const info = require("./info.json");

const methods = [];

// Iterate through methods, add to methods array
const methodsDir = './methods';
fs.readdirSync(methodsDir).forEach(file => {
    if (file.endsWith('.json')) {
        const method = require(`./methods/${file}`);
        methods.push(method);
    }
});

const spec = {
    openrpc: "1.3.2",
    info,
    methods,
};

fs.writeFileSync("openrpc.build.json", JSON.stringify(spec, null, 2));
console.log("✅ Built openrpc.build.json");

