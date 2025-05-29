import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from './BackButton';
const Delete = () => {
  const { id } = useParams();

  const handleDelete = () => {
    axios.delete(`/api/delete/${id}`)
      .then(() => {
        alert("User deleted successfully!");
        window.location.href = "/"; // Redirect to home page after deletion
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
     <BackButton/>
      <div className='h-screen flex '>
      <div className='h-100 w-screen flex flex-col justify-center items-center'>
            <div className='text-2xl p-10'>Please check Once Again before deleting</div>
        <button type='button' className=' outline outline-3 outline-red-400 rounded-xl h-10 w-20 p-2' onClick={handleDelete}>Delete</button>
      </div>
      </div>
    </>
  );
};

export default Delete;
