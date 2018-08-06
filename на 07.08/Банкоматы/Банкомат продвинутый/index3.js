var c50 = 50;
var c25 = 25;
var c10 = 10;
var c_50 = random_Cup(15, 25);
var c_25 = random_Cup(15, 25);
var c_10 = random_Cup(15, 25);
var money = (c50 * c_50) + (c_25 * c25) + (c_10 * c10);
var user_money = random_Cup(1500, 3000);
var pin = '0000';

function check() {
    if (c_50 <= 0) {
        var cc_25 = Math.floor(user_money_1 / c25);
        c_25 = c_25 - cc_25;
        var minus_balance = c25 * cc_25;
        user_money = user_money - minus_balance;
        alert("Недостаточно купюр по 50 грн \nВам будет выдано " + cc_25 + " купюры по 25 грн, ваш новый баланс - " + user_money);
    } else if (c_25 <= 0) {
        var cc_10 = Math.floor(user_money_1 / c10);
        c_10 = c_10 - cc_10;
        var minus_balance = c10 * cc_10;
        user_money = user_money - minus_balance;
        alert("Недостаточно купюр по 25 грн \nВам будет выдано " + cc_10 + " купюры по 10 грн, ваш новый баланс - " + user_money);
    } else if (c_10 <= 0) {
        alert("В банкомате больше совсем не осталось купюр :(");
    }
}

function c_50_func() {
    if (user_money_1 < 50) {
        if (sdacha2 === 0) {
            var cc_25 = Math.floor(user_money_1 / c25);
            var minus_balance = c25 * cc_25;
            c_25 = c_25 - cc_25;
            user_money = user_money - minus_balance;
            alert("Вам будет выдано " + cc_25 + " купюры по 25 грн, ваш новый баланс - " + user_money);

        } else if (sdacha3 === 0) {
            var cc_10 = Math.floor(user_money_1 / c10);
            var minus_balance = c10 * cc_10;
            c_10 = c_10 - cc_10;
            user_money = user_money - minus_balance;
            alert("Вам будет выдано " + cc_10 + " купюры по 25 грн, ваш новый баланс - " + user_money);
        }
    } else if (sdacha1 === 0 && c_50 > 0) {
        var cc_50 = Math.floor(user_money_1 / c50);
        var minus_balance = c50 * cc_50;
        user_money = user_money - minus_balance;
        c_50 = c_50 - cc_50;
        alert("Вам будет выдано " + cc_50 + " купюры по 50 грн, ваш новый баланс - " + user_money);
    } else if (sdacha2 === 0 && c_50 > 0) {
        var withdraw = Math.floor(user_money_1 / c50) + Math.floor(user_money_1 / c25);
        var cc_50 = Math.floor(user_money_1 / c50);
        var cc_25 = (user_money_1 % c50) / c25;
        c_50 = c_50 - cc_50;
        c_25 = c_25 - cc_25;
        var minus_balance = (cc_25 * c25) + (cc_50 * c50);
        user_money = user_money - minus_balance;
        alert("Вам будет выдано " + cc_50 + " купюр по 50 грн" + '\nВам будет выдано ' +
            cc_25 + ' купюр по 25 грн, баланс - ' + user_money);
    } else if (sdacha3 === 0 && c_50 > 0) {
        var withdraw = Math.floor(user_money_1 / c50) + Math.floor(user_money_1 / c10);
        var cc_50 = Math.floor(user_money_1 / c50);
        var cc_10 = (user_money_1 % c50) / c10;
        c_50 = c_50 - cc_50;
        c_10 = c_10 - cc_10;
        var minus_balance = (cc_50 * c50) + (cc_10 * c10);
        user_money = user_money - minus_balance;
        alert("Вам будет выдано " + cc_50 + " купюр по 50 грн" + '\nВам будет выдано ' +
            cc_10 + ' купюр по 10 грн, баланс - ' + user_money);
    } else if (sdacha1 !== 0 && sdacha2 !== 0 && sdacha3 !== 0) {
        alert("Введите сумму кратную 10, 25, 50");
    }
}

function random_Cup(numb, numb2) {
    var random1 = Math.random();
    return Math.floor(random1 * (numb - numb2) + numb2);
}
for (i = 0; i < 3; i++) {
    var user_pin = prompt("Введите пин-код" + '\nОбычно - 0000 без пробелов');
    if (user_pin == pin) {
        for (var i = 0; i < 50; i++) {
            var user_acess = prompt('Вы успешно вошли, ваш баланс - ' + user_money + ' грн' +
                '\nВыберите тип операции(ввести цифру в поле) :' +
                '\n1. Снять средства со счета' + '\n2. Перевести средства' + '\n3. Достать карту из банкомата');
            if (user_acess === '1') {
                var user_money_1 = prompt("Сколько денег вы хотите снять со своего счета, \nДоступный баланс " +
                    user_money + '\n Доступные купюры - 10, 25, 50');
                if (user_money_1 > user_money) {
                    alert("У вас недостаточно денег на счету, введите сумму кратную 10, 25 или 50");
                } else {
                    var sdacha1 = user_money_1 % c50;
                    var sdacha2 = sdacha1 % c25;
                    var sdacha3 = sdacha1 % c10;
                    check();
                    c_50_func();
                }
            } else if (user_acess === '2') {
                var user_transfer = prompt("Введите, сколько средств вы хотите отправить, \nДоступный баланс " + user_money);
                if (user_transfer % 1 === 0 && user_transfer < user_money) {
                    var user_transfer_number = prompt("Введите счет, на который отправить ( без пробелов )");
                    if (user_transfer_number % 1 === 0) {
                        user_money = user_money - user_transfer;
                        alert("Платёж успешно отправлен, ваш новый баланс - " + user_money);
                    } else {
                        alert("Неверно введены данные, платёж не был отправлен.")
                    }
                } else {
                    alert("У вас недостаточно денег на счету.");
                }
            } else if (user_acess === '3') {
                alert("Спасибо, приходите еще");
                break;
            }
        }
    } else {
        user_pin = alert("Неверный пинкод, повторите попытку еще раз, осталось попыток - " + (2 - i));
    }
}