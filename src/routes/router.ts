import { Request, Response, Router } from "express";
import { upload } from "../utils/multer";
import { CATEGORY_GET, CATEGORY_GET_BYID, PRODUCT_GET, PRODUCT_GET_BYID } from "../forusers.ts/forusers";
import { POST_CONTENT_CATEGORY, POST_CONTENT_PRODUCT } from "../forusers.ts/post.contents";



const route = Router()
route.post('/upload/product', upload.array('images', 3),POST_CONTENT_PRODUCT)
route.post('/upload/category', upload.single('image'),POST_CONTENT_CATEGORY)
route.get('/category', CATEGORY_GET)
route.get('/category/:id', CATEGORY_GET_BYID)
route.get('/car/models', PRODUCT_GET)
route.get('/car/models/:id', PRODUCT_GET_BYID)


export default route