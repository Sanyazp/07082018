var a = parseInt(process.argv[2]);

var dollar = 0.036907;
var euro = 0.031874;
var rubles = 2.34;
var tenge = 12.9105;
var yuan = 0.25;


if (a % 1 == 0) {
    console.log("<ul>");
    for (var i = 0; i < 5; i++) {
        if (i === 0) {
            console.log("<li>" + a + "Украинских гривен = " + a * dollar + " американских долларов" + "</li>");
        } else if (i === 1) {
            console.log("<li>" + a + "Украинских гривен = " + a * euro + " европейских евро" + "</li>");
        } else if (i === 2) {
            console.log("<li>" + a + "Украинских гривен = " + a * rubles + " российских рублей" + "</li>");
        } else if (i === 3) {
            console.log("<li>" + a + "Украинских гривен = " + a * tenge + " казахстанских тенге" + "</li>");
        } else if (i === 4) {
            console.log("<li>" + a + "Украинских гривен = " + a * yuan + " китайких юаней" + "</li>");
        }
    }
    console.log("<ul>");
} else {
    console.log("Неверный ввод, введите количество гривен, которые вы хотели бы перевести в валюты, например 28");
}