console.log("Odd number count started!");
let oddsCount = 0;
for (let i = 1; i <= 10; i++) {
    console.log("Iteration:", i);
    var number = Math.floor(Math.random() * 12) + 1;

    if (number % 2 == 0) {
        oddsCount++;
        console.log("Number:", number);
        continue;

    }
}
console.log(oddsCount + " odd numbers found!");
