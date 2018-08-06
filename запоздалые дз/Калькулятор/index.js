var a = +process.argv[2];
var b = process.argv[3];
var c = +process.argv[4];


if (b == '*') {
    console.log(a + " умножить на " + c + " = " + a * c);
} else if (b == '+') {
    console.log(a + " прибавить " + c + " = " + a + c);
} else if (b == '/') {
    console.log(a + " разделить на " + c + " = " + a / c);
} else if (b == '-') {
    console.log(a + " отнять " + c + " = " + a - c);
} else if (b == '%') {
    console.log(a + " разделить с остатком на " + c + " = " + a % c);
} else {
    console.log("Неверный ввод)))))))0");
}