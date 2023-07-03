import { DataTypes } from "sequelize";
import sequelize from "../utils/sequalize";
import { Model } from "sequelize";

class Category extends Model {
    public CategoryId: number
    public categoryName: string
    public image: string
}
Category.init(
    {
        CategoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        CategoryName: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(60),
        },
    },
    { sequelize, tableName: "Category",paranoid:true }
);


export default Category
