function testcontroller() {
    this.now = moment().format();
    this.start = moment().format();
    this.end = moment(this.start).add('3','d').format();
    this.lastWeek = moment().subtract(8,'d');
    this.hoursAgo = moment().subtract(3,'h');
    this.daysAgo = moment().subtract(24,'h');
    this.decimalMoney = 100.50;
    this.codeMoney = 'GBP';
    this.moneyObject = {
        amount: 123.45,
        currency: 'EUR'
    }
}

angular.module("demo").controller("testcontroller", testcontroller);