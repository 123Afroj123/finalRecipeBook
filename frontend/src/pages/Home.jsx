// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link } from "react-router-dom";
// // import { useParams } from 'react-router-dom'

// import { BsInfoCircle } from "react-icons/bs";
// import {  MdOutlineAddBox } from "react-icons/md";
// import { MdOutlineDelete } from "react-icons/md";
// import { AiOutlineEdit } from "react-icons/ai";
// import SearchBar from './SearchBar';





//    const Home = () => {
//     const[info,setInfo] = useState([])
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState([]);
     
//     useEffect(()=>{
//         axios.get(`/api/viewall`)
//         .then((res)=>{
//             setInfo(res.data)
           
//         })
//         .catch((error)=>{
//             console.log(error)
//           })
//     },[])
    
//   useEffect(() => {
//     const delayDebounce = setTimeout(() => {
//       if (query.length > 1) {
//         axios.get(`/api/search?q=${encodeURIComponent(query)}`)
//           .then((data )=>{
//              setResults(data)
//              console.log(data);
//           })
          
//           .catch(err => console.error(err));
//       } else {
//         setResults([]);
//       }
//     }, 300);

//     return () => clearTimeout(delayDebounce);
//   }, [query]);

//   // Show either search results or full info
//   const recipeToDisplay = results.length > 0 ? results : info;
//   return (
//     <>
    
     

// <div className='h-screen w-screen text-center ' >
//      {/* <h3 className='max-sm:hidden text-end  mr-10 p-5 '><Link to='/learn' className=''><span className='text-3xl -mt-20'>👉🏻</span>Learn How To Create a Blog</Link></h3> */}
//          <h3 className='max-sm:hidden text-end -ml-2-2 p-5'>
//         <SearchBar query={query} setQuery={setQuery} />
//         </h3>     
//         <div className='bg-gradient-to-r from-rose-400 via-teal-300  to-purple-800 text-transparent bg-clip-text  '>
//         <h1 className='max-sm:p-10 p-5'>Recipe Book</h1>
//              <h2 className='text-xl '>Create your Recipe and publish</h2>
//              {/* <h3 className='md:hidden  xl:hidden 2xl:hidden max-sm:text-center text-end  max-sm:p-1 max-sm:mr-0 mr-40  max-sm:mt-5 '><Link to='/learn' className=''><span className='text-3xl -mt-20'>👉🏻</span>Learn How To Create a Blog</Link></h3> */}
             
              
//             </div>

     

//          <div className=' ml-3  p-4 max-sm:w-100 w-300 h-auto flex flex-wrap gap-4 justify-center relative  '> {/* xl:flex  2xl:flex md:flex */}
//         <Link to="/add" className=''><MdOutlineAddBox className='text-5xl absolute -top-10 max-sm:-top-1 max-sm:right-1  right-20 '/></Link>
//      {
//         recipeToDisplay.map((data)=>(
//        <div className='text-start max-sm:mt-8  max-sm:ml-10 ml-20 p-5 max-sm:h-45 w-80 h-50   justify-between  m-2 p-4 outline-2 outline-purple-400 rounded-xl flex   items-center  'key={data._id} >
//            <div>
//            <h2 className='text-xl'>Title:{data.title}</h2>
            
//            {/*<p>{data.author}</p> */}
//            </div>
          
//           <div className='flex flex-col gap-4'>
//           <Link to={`/view/${data._id}`}><BsInfoCircle className=' text-3xl' /></Link>
//            <Link to={`/update/${data._id}`}><AiOutlineEdit className=' text-3xl' /></Link>
//            <Link to={`/delete/${data._id}`}><MdOutlineDelete className=' text-3xl' /></Link>
//           </div>
//         </div>
//       ))}
//         </div>
//      </div>
      
    
//     </>
//   )
// }

// export default Home




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import SearchBar from './SearchBar';

const Home = () => {
  const [info, setInfo] = useState([]);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get(`/api/viewall`)
      .then((res) => setInfo(res.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length > 1) {
        axios.get(`/api/search?q=${encodeURIComponent(query)}`)
          .then((res) => {
            setResults(res.data);
            
          })
          .catch((err) => console.error(err));
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const recipeToDisplay = results.length > 0 ? results : info;

  return (
    <div className='min-h-screen w-full text-center'>
      <h3 className='max-sm:hidden text-end p-5'>
        <SearchBar query={query} setQuery={setQuery} />
      </h3>

      <div className='bg-gradient-to-r from-rose-400 via-teal-300 to-purple-800 text-transparent bg-clip-text'>
        <h1 className='max-sm:p-10 p-5'>Recipe Book</h1>
        <h2 className='text-xl'>Create your Recipe and publish</h2>
      </div>

      <div className='ml-3 p-4 flex flex-wrap gap-4 justify-center relative'>
        <Link to="/add">
          <MdOutlineAddBox className='text-5xl absolute -top-10 max-sm:-top-1 max-sm:right-1 right-20' />
        </Link>

        {recipeToDisplay.map((data) => (
          <div
            key={data._id}
            className='text-start max-sm:mt-8 max-sm:ml-10 ml-20 w-80 h-50 m-2 p-4 outline-2 outline-purple-400 rounded-xl flex justify-between items-center'
          >
            <div>
              <h2 className='text-xl'>Title: {data.title}</h2>
            </div>
            <div className='flex flex-col gap-4'>
              <Link to={`/view/${data._id}`}><BsInfoCircle className='text-3xl' /></Link>
              <Link to={`/update/${data._id}`}><AiOutlineEdit className='text-3xl' /></Link>
              <Link to={`/delete/${data._id}`}><MdOutlineDelete className='text-3xl' /></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
