// const fs= require ("fs");
// const pdf = require("html-pdf");
// var html = fs.readFileSync('../../../views/partials/newbudget.handlebars', 'utf8');
// var options = { format: 'Letter' };

$(document).ready(function () {
    $("button2").on("click", function (event) {
        event.preventDefault();

        var newTrip = {
            departure: $("#departure").val(),
            return: $("#return").val(),
            email: $("#email").val().trim(),
            flight: $("#flightinfo").val().trim(),
            hotel: $("#hotelinfo").val().trim(),
            destination: $("#destination").val().trim(),
            budget: $("#totalbudget").val().trim()
        };
        $.ajax({
            method: "POST",
            url: "/api/activetrip",
            data: newTrip
        })
        .then(function(data) {
            // Store data in local storage
            localStorage.setItem("newTrip", JSON.stringify(data));
            // Change pages
            window.location.href = `/activetrip?`;
        })
        .catch(function(err) {
            console.error(err)
        });

        // pdf.create(html,options).toFile(`testing.pdf`, function (error, result){
        //     if (error)return console.log(error);
        //     console.log(`Itinerary created for testing.pdf`)
        // });
    });
});

var t = "%" || "+" || "-" || "*" || "/";
var result = "";
var o = a(result);
var re1 = /^[\*|\/\%].+/;
function a(str) {}

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