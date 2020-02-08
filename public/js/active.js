const retreivedObject = localStorage.getItem("newTrip");
console.log("retrievedObject: ", JSON.parse(retreivedObject));
const parseObj = JSON.parse(retreivedObject);

// const fs = require("fs");
// const pdf = require("html-pdf");
// var html = fs.readFileSync('../../../views/partials/newbudget.handlebars', 'utf8');
// var options = { format: 'Letter' };

// pdf.create(html, options).toFile(`testing.pdf`, function (error, result) {
//     if (error) return console.log(error);
//     console.log(`Itinerary created for testing.pdf`)
// });

$("#resF").append(parseObj.flight);
$("#resH").append(parseObj.hotel);
$("#resD").append(parseObj.destination);
$("#resB").append(parseObj.budget);
$("#resE").append(parseObj.email);

$("#emailBtn").on("click", function (event) {
    event.preventDefault();
    // sendEmail(name, email, message, function () {
    //     fetch('/send', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name: name,
    //             email: email,
    //             message: message
    //         })
    //     })
    //     .then((res) => res.json())
    //     .then((res) => {
    //         console.log('here is the response: ', res);
    //     })
    //     .catch((err) => {
    //         console.error('here is the error: ', err);
    //     })
    // });
    $.ajax({
        method: "POST",
        url: "/send",
        data: parseObj
    })
});