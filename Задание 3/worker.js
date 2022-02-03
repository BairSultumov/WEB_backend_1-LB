function Worker(position, years) {
    this.position = position
    this.years = years
    this.displayInfo = function () {
        console.log("Должность: " + this.position + " Стаж: " + this.years)
    }
}
module.exports = Worker;