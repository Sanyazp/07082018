var figure = process.argv[2];
var a = +process.argv[3]; // сторона
var h = +process.argv[4]; // высота
if (!h) {
    console.log("Неверный ввод, введите <название фигуры> сторона высота")
} else if (figure == 'квадрат') {
    var empty = ' ';
    var empty2 = '';
    var storona = ' #';
    var otstup = " ";
    for (var x = 0; x < a; x++) {
        empty = empty + '#';
        storona = storona + ' ';
    }
    console.log(empty);
    for (var y = 0; y < a; y++) {
        if (y == 2) {
            continue;
        }
        if (y == 3) {
            continue;
        }
        if (!y) {
            storona = storona + '\b' + '\b' + '#';
        }
        console.log(storona);

    }
    console.log(empty);
} else if (figure == 'треугольник') {
    var storona = ' ';
    var gipotenuza_space = '';
    for (var i = 0; i < h; i++) {
        gipotenuza_space = gipotenuza_space + '  ';
        if (i > a) {
            break;
        }
        console.log('#' + gipotenuza_space + '#');
    }
    for (var y = 0; y < a; y++) {
        storona = storona + '# ';
    }
    console.log(storona);
}