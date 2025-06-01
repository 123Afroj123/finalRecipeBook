

import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from './BackButton'


function View() {
  const [info, setInfo] = useState({})
   const {id} = useParams();
  useEffect(()=>{
    axios.get(`https://finalrecipebook-3.onrender.com/api/view/${id}`)
    .then((response)=>{
      setInfo(response.data)
      console.log(response.data)
      
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  return (
    <>
      <BackButton/>
    <div className='h-screen  flex flex-row justify-center'>
    <div className='  h-screen w-screen flex justify-center items-center '>
       <div className='p-2 gap-4  '>
       <h2 className='text-3xl '>Title:{info.title}</h2>
      
      
       <div className='h-auto w-auto m-2 p-4 outline-2 outline-purple-400 rounded-xl ' key={info._id}>
          
          <div className=' overflow-hidden'>
          <p>{info.ingredients}</p> {/*title,ingredients,instructions,cookingtime,servingsize */}
          <p>{info.instructions}</p>
          <p>{info.cookingtime}</p>
          <p>{info.servingsize}</p>
           {/* <p>{new Date(info.createdAt).toString()}</p>                 
           <p>{new Date(info.updatedAt).toString()}</p> */}
          </div>
          
        </div>
        
    
       </div>
     </div>
    </div>
    </>
  )
}

export default View;
