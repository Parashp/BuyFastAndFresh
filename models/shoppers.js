module.exports = function (sequelize, DataTypes) {
    const Shopper = sequelize.define("Shopper", {
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            key: true,
            validate: {
                isEmail: true
            },
            index: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [5, 10],
                is: /(^\d{5}$)|(^\d{5}-\d{4}$)/
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [10, 14],
                is: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
            }
        },
        account_status: {
            type: DataTypes.BOOLEAN,
            default: true
        },
        account_number: {
            type: DataTypes.STRING,
            allowNull: true
        }

    });

    Shopper.associate = function (models) {
        Shopper.hasMany = (models.Orders, {
            onDelete: "cascade"
        });

        Shopper.hasMany = (models.ShopperPayment, {
            onDelete: "cascade"
        });
    }


    return Shopper;
}