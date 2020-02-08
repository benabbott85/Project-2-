module.exports = function (sequelize, DataTypes) {
    var Trips = sequelize.define("Trips", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
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