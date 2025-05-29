import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'
const BackButton = ({destination ="/"}) => {
      
  return (
      <div className=' h-5'>
        <div className='flex justify-center  '>
        <Link
         to={destination}
         className='px-4 py-1 '
        >
            <span className='flex'><BsArrowLeft className="text-5xl text-bold animate-pulse mt-8"/><span className='mt-11'>Go to Home</span></span>
            
        </Link>
    </div>
      </div>
  )
}

export default BackButton