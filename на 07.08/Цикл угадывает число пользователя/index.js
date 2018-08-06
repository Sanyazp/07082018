var user_number = prompt("Загадайте число от -50 до 50, а я попробую его угадать");
parseInt(user_number);
for (var i = -68; i < 51; i++) {
    if (i == user_number) {
        alert("Я угадал ваше число, количество попыток = " + Math.abs(-68 - i) + ' ,ваше число = ' + user_number);
        break;
    } else if (i == 50 && i !== user_number) {
        alert("Я не угадал.");
    }
}