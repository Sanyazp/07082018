var a = +process.argv[2];
var b = 50;
var c = 25;
var d = 10;
var sdacha1 = a % b;
var sdacha2 = sdacha1 % 25;
var sdacha3 = sdacha1 % 10;
if (sdacha1 === 0) {
    console.log("Банкомат выдаст " + a / b + " купюр по 50 гривен");
} else if (a < 50) {
    if (a % 25 === 0) {
        var ostatok = sdacha1 / c;
        console.log("Банкомат выдаст " + ostatok + " купюр по 25 гривен");
    } else if (a % 10 === 0) {
        var ostatok = sdacha1 / d;
        console.log("Банкомат выдаст " + ostatok + " купюр по 10 гривен");
    } else {
        console.log("Сумма должна быть кратна 50, 25 или 10, вы ввели - " + a);
    }
} else if (sdacha2 === 0) {
    var comp = Math.floor(a / b);
    console.log("Банкомат выдаст " + comp + " купюр по 50 гривен");
    var ostatok = sdacha1 / c;
    console.log("Банкомат выдаст " + ostatok + " купюр по 25 гривен");
} else if (sdacha3 === 0) {
    var comp = Math.floor(a / b);
    console.log("Банкомат выдаст " + comp + " купюр по 50 гривен");
    var ostatok = sdacha1 / d;
    console.log("Банкомат выдаст " + ostatok + " купюр по 10 гривен");
} else {
    console.log("Сумма должна быть кратна 50, 25 или 10, вы ввели - " + a);
}

// При вводе числа в программу показывает какими купюрами из 
// набора 50, 25 и 10 он может выдать деньги, или не может =)))))