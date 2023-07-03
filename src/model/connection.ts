import Product from "./Product.model";
import Category from "./Category.model";
import sequelize from "../utils/sequalize";

Category.hasMany(Product,{
    foreignKey:'categoryId',
    onDelete:'cascade'
})

Product.belongsTo(Category,{
    foreignKey:'categoryId'
})

sequelize.sync()

export{
    Category,
    Product
}