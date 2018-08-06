function random_jjj(a, b) {
    var random1 = Math.random();
    var random = Math.floor(random1 * (a - b) + b);
    console.log(random);
}

random_jjj(200, 800);