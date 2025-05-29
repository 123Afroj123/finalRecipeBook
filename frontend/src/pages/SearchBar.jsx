import react from "react"
import { IoSearchSharp } from "react-icons/io5";

function SearchBar({ query, setQuery }) {
    return (
      <div className="flex justify-center 
       ">
        <input
         className="mt-2 width-auto h-10 outline-2 outline-indigo-500 rounded-md"
          type="text"
          placeholder="Search by title"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
       <div className=" text-3xl mt-2 w-10 outline-2 outline-blue-500 h-10 rounded-r-xl p-1"> <IoSearchSharp /></div>
      </div>
    );
  }
  

export default SearchBar;
