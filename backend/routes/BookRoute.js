import express from "express";
import { show,create, showone,update,Delete } from "../controller/BookController.js";

const route = express.Router()

route.get("/viewall",show)
route.get("/view/:id",showone)
route.post("/add",create)
route.put("/update/:id",update)
route.delete("/delete/:id",Delete)

export default route