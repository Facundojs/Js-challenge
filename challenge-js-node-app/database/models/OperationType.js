module.exports = function (Sequelize, DataTypes) {
    let alias = "OperationType";
    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        name: DataTypes.STRING
    };
    let config = {
        tableName: "operation_types",
        timestamps: false,
        paranoid: false
    };
    let OperationType = Sequelize.define(alias, cols, config);
    OperationType.associate = (models) => {
        OperationType.belongsTo(models.Operation, {
            as: 'operations',
            foreignKey: 'typeId'
        })
    }
    return OperationType;
}