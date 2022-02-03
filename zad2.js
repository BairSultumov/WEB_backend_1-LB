const { process_params } = require("express/lib/router");

function f(m) {
    let fact = 0
    if (m < 2) return 1;
    return m * f(m - 1);
}

var b = process.argv[2]

if (isNaN(b)) console.log("Error")
else
console.log("Res = " + f(b));