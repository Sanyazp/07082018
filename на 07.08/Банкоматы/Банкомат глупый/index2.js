var c_50 = 50;
var c_25 = 25;
var c_10 = 10;

function random(a, b) {
    var random1 = Math.random();
    var random = Math.floor(random1 * (a - b) + b);
    return random;
}
var balance_bank = random(1500, 5000);
parseInt(balance_bank);
var otvet = prompt("Добрый день, введите сумму, которую вы бы хотели снять" + '\nДоступный баланс - ' + balance_bank);
parseInt(otvet);
var sdacha1 = otvet % c_50;
var sdacha2 = sdacha1 % 25;
var sdacha3 = sdacha1 % 10;
if (otvet <= balance_bank) {
    if (sdacha1 === 0) {
        alert("Банкомат выдаст " + otvet / c_50 + " купюр по 50 гривен");
    } else if (otvet < 50) {
        if (otvet % 25 === 0) {
            var ostatok = sdacha1 / c_25;
            alert("Банкомат выдаст " + ostatok + " купюр по 25 гривен");
        } else if (otvet % 10 === 0) {
            var ostatok = sdacha1 / c_10;
            alert("Банкомат выдаст " + ostatok + " купюр по 10 гривен");
        } else {
            alert("Сумма должна быть кратна 50, 25 или 10, вы ввели - " + otvet);
        }
    } else if (sdacha2 === 0) {
        var comp = Math.floor(otvet / c_50);
        alert("Банкомат выдаст " + comp + " купюр по 50 гривен");
        var ostatok = sdacha1 / c_25;
        alert("Банкомат выдаст " + ostatok + " купюр по 25 гривен");
    } else if (sdacha3 === 0) {
        var comp = Math.floor(otvet / c_50);
        alert("Банкомат выдаст " + comp + " купюр по 50 гривен");
        var ostatok = sdacha1 / c_10;
        alert("Банкомат выдаст " + ostatok + " купюр по 10 гривен");
    } else {
        alert("Сумма должна быть кратна 50, 25 или 10, вы ввели - " + otvet);
    }
} else {
    alert("Извините, у Вас нет столько денег на счету, или вы ввели что-то не то =)")
}