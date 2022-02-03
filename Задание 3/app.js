const data = require("./data");

var k = process.argv[2]

let m

if (isNaN(k)){ m = data.generate(1)
    k=1;
}
else m = data.generate(k)

for (let i = 0; i < k; i++) {
    m[i].displayInfo()
}