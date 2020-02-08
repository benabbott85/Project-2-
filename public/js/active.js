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

    
    
    $("#resF").append(parseObj.destination);
    $("#resH").append(parseObj.hotel);
    $("#resD").append(parseObj.flight);
    $("#resB").append(parseObj.budget);
   
