let METHOD_BASE16 = 0;
let METHOD_BASE36 = 1;

function base36(inputNumber) {
    // let BASE36_PAD = '0123456789ABCDEFGHIJKLMNOPQRSTUVVWXYZ';
    // var result = "";

    // console.log(inputNumber);
    // do {
    //     // result = BASE36_PAD[inputNumber % 36].concat(result);
    //     result = result.concat(BASE36_PAD[inputNumber % 36]);
    //     inputNumber = Math.round(inputNumber / 36);
    //     console.log(inputNumber);
    // } while (inputNumber > 0);

    // return result;
    return parseInt(inputNumber).toString(36).toUpperCase();

}

function base16(inputNumber) {
    return parseInt(inputNumber).toString(16).toUpperCase();
}

function generateOne(inputNumber, method) {
    switch (method) {
        case METHOD_BASE16:
            return base16(inputNumber);

        case METHOD_BASE36:
            return base36(inputNumber);

        default:
            return inputNumber.toString();
    }
}

function generate(iteration, method, level) {
    var n = 0;
    var result = [];

    // determining block size
    var bar = 10;
    switch (method) {
        case METHOD_BASE16:
            bar = 16;
            break;
        case METHOD_BASE36:
            bar = 36;
            break;
        default:
            break;
    }
    let barrier = bar ** level;

    for (var i = 0; i < iteration; i++) {
        n = Math.round(Math.random() * barrier) % barrier;
        result.push(generateOne(n, method).padStart(level, '0'));
    }
    return result.sort();
}

function printGenerate() {
    iteration = parseInt(document.getElementById("itr").value);
    method = parseInt(document.getElementById("mtd").value);
    level = parseInt(document.getElementById("lvl").value);
    var myList = generate(iteration, method, level);
    document.getElementById("output_codes").innerHTML = myList.join('<br/>');
    document.getElementById("output_json").innerHTML = JSON.stringify(myList);
}
