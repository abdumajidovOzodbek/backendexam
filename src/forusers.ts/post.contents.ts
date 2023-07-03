import { Category, Product } from '../model/connection'
import { Request, Response } from "express"

const POST_CONTENT_CATEGORY = async (req: Request, res: Response) => {
    const newCategory = {
        categoryName: req.body.categoryName,
        image: req.file?.filename
    }

    const data = await Category.create(newCategory)
    res.send({ status: 201, message: 'created', data })
}
const POST_CONTENT_PRODUCT = async (req: Request, res: Response) => {
    const { productName, description, made_it,
        distance, price, categoryId, color, motor, marka, gearBook } = req.body
    const files= req.files
    
   
    const newProduct = {
        productName,
        description,
        made_it,
        distance,
        price,
        categoryId,
        color,
        motor,
        marka,
        gearBook
    }
    const data = await Category.create(req.body)

    res.send({ status: 201, message: 'created', data })
}

export {
    POST_CONTENT_CATEGORY,
    POST_CONTENT_PRODUCT
}