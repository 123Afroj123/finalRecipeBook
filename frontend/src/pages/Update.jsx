import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
// import BackButton from './BackButton';
const Update = () => {
  const navigate = useNavigate();

    const[title,setTitle]=useState('');
    const[ingredients,setIngredients]=useState('');
    const[instructions,setInstructions]=useState('');
    const [cookingtime,setCookingtime]=useState('');
    const [servingsize,setServingsize]=useState('');
    const[loading,setLoading] = useState(false)
  const {id} = useParams();

   useEffect(()=>{
       setLoading(true)
    axios.get(`/api/view/${id}`)
    .then((res) => {

      setTitle(res.data.title);
      setInstructions(res.data.instructions)
      setIngredients(res.data.ingredients)
      setCookingtime(res.data.cookingtime)
      setServingsize(res.data.servingsize)
      
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
    });
   },[id])
 

  const handleUpdateForm = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {title,ingredients,instructions,cookingtime,servingsize}


    axios.put(`/api/update/${id}`, data)
      .then(() => {
        setLoading(false);
        alert("Recipe updated successfully!");
        navigate("/")
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
 

  return (
   <>
     {/* <BackButton/> */}
     <div className=' '> 
        <div className='h-screen w-screen flex  justify-center items-center   '>
            <form onSubmit={handleUpdateForm} action="" className='p-2 h-130 w-100  outline-2 outline-blue-500 rounded-xl flex flex-col gap-3 text-md'>
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
  );
};

export default Update;
