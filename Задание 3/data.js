const Worker = require("./worker");


function generate(k) {
    let mas = []
    let mp = ["рабочий", "менеджер", "директор"]

    for (let i = 0; i < k; i++) {
        let years = Math.round(Math.random() * 30)
        let position = mp[Math.round(Math.random() * 2)]
        mas[i] = new Worker(position, years)
    }
    return mas
}

module.exports.generate = generate