module.exports = function (sequelize, DataTypes) {
    var Trips = sequelize.define("Trips", {
        flight: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        hotel: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        budget: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return Trips;
};

// newTrip = {
//     flight: $("#flightinfo").val().trim(),
//     hotel: $("#hotelinfo").val().trim(),
//     destination: $("#destination").val().trim(),
//     budget: $("#totalbudget").val().trim()
// };