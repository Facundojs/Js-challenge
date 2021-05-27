module.exports = function (Sequelize, DataTypes) {
    let alias = "Operation";
    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        userId: DataTypes.INTEGER,
        typeId: DataTypes.INTEGER,
        concept: DataTypes.STRING,
        mount: DataTypes.INTEGER,
        date: DataTypes.DATEONLY,
    };
    let config = {
        tableName: "operations",
        timestamps: false,
        paranoid: false
    };
    let Operation = Sequelize.define(alias, cols, config);
    Operation.associate = (models) => {
        Operation.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'userId'
        })
    }
    return Operation;
}