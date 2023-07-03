import jwt from "jsonwebtoken";
import { Request,Response } from "express";
const manager ={
  admin:'ozodbek',
  password:'12345678'
}
const SECRET_KEY='ozod'
const POST = (req:Request, res:Response) => {
  try {
    const { sign } = jwt;
    const { admin, password } = req.body;
    if (!(admin == manager.admin && password == manager.password)) {
      throw new Error(`invalid admin or admin password`);
    }
    console.log(sign({admin:admin}, SECRET_KEY));
    res.json({
      status: 200,
      message: "you are logged in ",
      token: sign({admin:admin}, SECRET_KEY),
    });
  } catch (error:any) {
    res.json({
      status: 404,
      message: `Error: ${error.message}`,
    });
  }
};
const VERIFICATE = (req:Request, res:Response) => {
  // const { id, status } = req.params;
  // if (!find || !id || !status) {
  //   res
  //     .status(404)
  //     .send({ status: 404, message: "this user's message is not defined" });
  // }
  // find.status = status;
  // write("posts", posts);
  res
    .status(200)
    .send({ status: 200, message: "successfully declared a new post", data:1 });
};

export { POST,VERIFICATE};
