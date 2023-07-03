import {Category,Product} from '../model/connection' 
import { Request,Response } from "express"


const CATEGORY_GET=async (req:Request,res:Response)=>{
  const data = await Category.findAll()
  res.send({status: 200, messagee:'succes', data})
}
const CATEGORY_GET_BYID=async (req:Request,res:Response)=>{
    const id= req.params
    const data =await Product.findAll({where:{
        categoryId: id
    }})
    res.send({status: 200, messagee:'succes', data})
}


export {
    CATEGORY_GET,CATEGORY_GET_BYID
}