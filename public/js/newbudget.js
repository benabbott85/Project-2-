const fs= require ("fs");
const pdf = require("html-pdf");
var html = fs.readFileSync('../../../views/partials/newbudget.handlebars', 'utf8');
var options = { format: 'Letter' };

var t = "%" || "+" || "-" || "*" || "/";

var newTrip;

var result = "";


var o = a(result);
var re1 = /^[\*|\/\%].+/;
function a(str) {

}


function calculator() {

    result += window.event.srcElement.innerText;
    input.value = result;

}
function resultcalculator() {
    if (input.value.match(re1)) {

        input.value = "NA";

        result = "";
        return false;
    }

    input.value = Math.round(eval(input.value) * 100000000) / 100000000;
    result = "";



}
function Clear() {
    result = "";
    input.value = 0;
}
function DEL() {

    if ((result !== 0) || (input.value.slice(-1) == "."))
        result = result.slice(0, result.length - 1);
    input.value = result;
    if (result == 0) return false;


}
function zero() {
    if (input.value.slice(-1).match(flag)) return false;
    if ((input.value == 0) && (input.value.indexOf(".") == -1)) return;
    result += "0";
    input.value = result;


}
function dzero() {
    if (input.value.slice(-1).match(flag)) return false;
    if ((input.value == 0) && (input.value.indexOf(".") == -1)) return false;
    result += "00";
    input.value = result;
}
function dot() {

    if (find(result, t) + 1 >= find(result, "."))  //
    {
        if (input.value.slice(-1).match(flag)) result += "0";
        result += ".";
        input.value = result;
    }
}
var flag = /[\*|\/|\%|\+|\-]$/;
function calculator1() {

    if (input.value.slice(-1).match(flag)) { DEL(); };
    result += window.event.srcElement.innerText;
    input.value = result;
}
function find(str, str1) {
    var a = str.split("");
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str1) sum++;
    }
    return sum;
}

$("#submitbtn").on("click", function (event) {
    event.preventDefault();
    console.log("testing")

    newTrip = {
        name: $("#name").val().trim(),
        destination: $("#destination").val().trim(),
        budget: $("#totalbudget").val().trim()
    };
<<<<<<< HEAD


    pdf.create(html,options).toFile(`testing.pdf`, function (error, result){
        if (error)return console.log(error);
        console.log(`Itinerary created for testing.pdf`)
    })    



=======
>>>>>>> 81e493980a51865d6eac81e5501fd9beed97a5de
    console.log(newTrip)


    // $.ajax("/activetrip", {
    //     type: "POST",
    //     data: newTrip
    // }).then(
    //     function () {
    //         console.log("created new trip");
    //     }
    // );
});