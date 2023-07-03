import { DataTypes } from "sequelize";
import sequelize from "../utils/sequalize";
import { Model } from "sequelize";


class Product extends Model {
    public productId: number
    public productName: string
    public outerImage: string
    public innerImage: string
    public modelImage: string
    public made_it: string
    public distance: number
    public price: number
    public categoryId: number
    public description: string
    public color: string
    public motor: string
    public marka: string
    public gearBook: string
    public tonirovka: boolean
}
Product.init({
    ProductId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    productName: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    outerImage: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    innerImage: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    modelImage: {
        type: DataTypes. STRING(60),
        allowNull: false
    },
    made_it: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    distance: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    color: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    motor: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    marka: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    gearBook: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    tonirovka:{
        type: DataTypes.BOOLEAN
    }

},
    { sequelize, tableName: "Product",paranoid:true }

)

export default Product