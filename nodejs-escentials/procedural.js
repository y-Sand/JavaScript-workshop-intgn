var reverse = function (x) {
    const length = x.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        const temp = x[i]
        x = x.substring(0, i) +
            x.charAt(length - i - 1) +
            x.substring(i + 1, length - i - 1) +
            temp +
            x.substring(length - i)
    }
    return x
};
var main = function () {
    console.log(`NodeJS`);
    let cadena = "Nabucodonosor";
    console.log(reverse(cadena));

    let string = "Once upon a time in new york";
    console.log(toCapitalize(string));
}
main();


function toCapitalize(input){
    let arrayOfString = input.split(' ');
    for (let i = 0; i<arrayOfString.length; i++){ // for (palabra of arrayOfString), pero con este no hay persistencia
        let firstChar = arrayOfString[i].charAt(0);
        arrayOfString[i] = firstChar.toUpperCase() + arrayOfString[i].slice(1) //slice de uno en adelante si no definimos el end
    }
    return arrayOfString.join(' ');
}
