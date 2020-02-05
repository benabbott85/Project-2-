$(document).ready(function () {


    function getPast(category) {
        var categoryString = category || "";
        if (categoryString) {
            categoryString = "/category/" + categoryString;
        }
        $.get("/past" + categoryString, function (data) {
            console.log("pastTrips", data);
            pastTrips = data;
            if (!pastTrips || !pastTrips.length) {
                displayEmpty();
            }
            else {
                initializeRows();
            }
        });
    }

    getPast();

    
});