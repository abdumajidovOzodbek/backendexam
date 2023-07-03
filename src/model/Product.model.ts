import { DataTypes } from "sequelize";
import sequelize from "../utils/sequalize";
import { Model } from "sequelize";


class Product extends Model {
    public ProductId: number
    public ProductName: string
    public OuterImage: string
    public InnerImage: string
    public ModelImage: string
    public made_it: string
    public distance: number
    public price: number
    public CategoryId: number
    public description: string
    public color: string
    public Motor: string
    public Marka: string
    public GearBook: string
}
Product.init({
    ProductId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    ProductName: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    OuterImage: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    InnerImage: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    ModelImage: {
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
    CategoryId: {
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
    Motor: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    Marka: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    GearBook: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
},
    { sequelize, tableName: "Product",paranoid:true }

)

export default Product