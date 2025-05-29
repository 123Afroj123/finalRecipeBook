

import Book from "../models/bookModel.js";

//get 
export const show = async(req,res)=>{
   try {
    const books = await Book.find();
    if(books.length==0){
        return res.json("No recepies....")
    }
    return res.status(201).json(books)
   } catch (error) {
    return res.json({
        message:"Error while creating a Book",
        error:error.message
    })
    
   }

}

export const showone = async(req,res)=>{
    try {
        const {id} = req.params;
     const books = await Book.findById(id);
     if(books.length==0){
         return res.json("No recepies....")
     }
     return res.status(201).json(books)
    } catch (error) {
     return res.json({
         message:"Error while creating a Book",
         error:error.message
     })
     
    }
 
 }
//create

export const create = async(req,res)=>{
    const{title,ingredients,instructions,cookingtime,servingsize} = req.body;
    try {
         const newBook = new Book({
            title,ingredients,instructions,cookingtime,servingsize
         })
         const saveBook = await newBook.save();
         return res.status(201).json(saveBook)
    } catch (error) {
        return res.json({
            message:"Error while creating a Book",
            error:error.message
        })
    }
}

export const update = async(req,res)=>{
    try {
        const {id}= req.params.id;
        const BookExist = await Book.findOne({_id:id})
        if(!BookExist){
            return res.json({message:"Recipe Not found"})
        }
        const UpdateBook = await Book.findByIdAndUpdate(id,req.body,{new:true})
        return res.status(201).json(UpdateBook)
    } catch (error) {
        return res.json({
            message:"Error while creating a Book",
            error:error.message
        })
    }
}
export const Delete = async(req,res)=>{
    try {
        const {id}= req.params;
        const BookExist = await Book.find({_id:id})
        if(!BookExist){
            return res.json({message:"Recipe Not found"})
        }
          await Book.findByIdAndDelete(id,req.body,{new:true})
        return res.status(201).json({message:"deleted successfully"})
    } catch (error) {
        return res.json({
            message:"Error while creating a Book",
            error:error.message
        })
    }
}