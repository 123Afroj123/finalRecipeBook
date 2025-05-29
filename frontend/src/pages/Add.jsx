import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Add = () => {//title,ingredients,instructions,cookingtime,servingsize
    const navigate = useNavigate();
    
    const[title,setTitle]=useState('');
    const[ingredients,setIngredients]=useState('');
    const[instructions,setInstructions]=useState('');
    const [cookingtime,setCookingtime]=useState('');
    const [servingsize,setServingsize]=useState('');
    const[loading,setLoading] = useState(false)
    
    const handleForm = (e)=>{
        e.preventDefault(); // Prevent default form submission
        setLoading(true);
        const data = {title,ingredients,instructions,cookingtime,servingsize};
            axios.post("/api/add",data)
            .then(()=>{
                setLoading(false)
                alert("Recipe created")
                navigate("/");
            })
            .catch((error)=>{
                setLoading(false)
                console.log(error);
                
            })
      

    }

 

  return (
    <> 
    <div className=' '>  {/*title,ingredients,instructions,cookingtime,servingsize */}
        <div className='h-screen w-screen flex  justify-center items-center   '>
            <form onSubmit={handleForm} action="" className='p-2 h-130 w-70  outline-2 outline-blue-500 rounded-xl flex flex-col gap-3 text-md'>
                <label  htmlFor="">Title:</label>
                <input placeholder='' className='p-2 outline-1 outline-blue-500 rounded-xl hover:outline-3 hover:outline-blue-600' type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label  htmlFor="">Ingredients:</label>
                <input placeholder='' className=' p-2 outline-1 outline-blue-500 rounded-xl hover:outline-3 hover:outline-blue-600' type='text' value={ingredients} onChange={(e)=>setIngredients(e.target.value)}/>
                <label  htmlFor="">Instructions:</label>
                <input placeholder='' className=' p-2 outline-1 outline-blue-500 rounded-xl hover:outline-3 hover:outline-blue-600' type='text' value={instructions} onChange={(e)=>setInstructions(e.target.value)}/>
                <label  htmlFor="">Cookingtime:</label>
                <input placeholder='' className=' p-2 outline-1 outline-blue-500 rounded-xl hover:outline-3 hover:outline-blue-600' type='text' value={cookingtime} onChange={(e)=>setCookingtime(e.target.value)}/>
                <label  htmlFor="">Servingsize :</label>
                <input placeholder='' className=' p-2 outline-1 outline-blue-500 rounded-xl hover:outline-3 hover:outline-blue-600' type='text' value={servingsize} onChange={(e)=>setServingsize(e.target.value)}/>


                <button type='submit' className='mt-4 p-2 outline-1 outline-green-500 rounded-xl hover:outline-2 hover:outline-green-600 ' >{loading ? "Submitting..." : "Submit"}</button>
            </form>
        </div>
    </div>
      
    
    
    </>  

)
}

export default Add