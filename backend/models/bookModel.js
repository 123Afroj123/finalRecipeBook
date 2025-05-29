import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    ingredients:{
        type:[String],
        required:true,
    },
    instructions:{
        type:String,
        required:true,
    },
    cookingtime:{
      type:Number ,

    },
    servingsize:{
         type:Number
    }

})

const Book =  mongoose.model("Book",BookSchema)
export default Book;

















