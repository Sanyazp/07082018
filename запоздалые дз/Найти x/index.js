var k = +process.argv[2];
var c = +process.argv[3];

for (var x = 0; x === x; x++) {
    if (((k * x) + c) === 0) {
        console.log("X = " + x);
        break;
    } else if (x >= 50) {
        console.log("Не удалось получить результат, ни одно значение x не подходит, попыток - " + x);
        break;
    }
}