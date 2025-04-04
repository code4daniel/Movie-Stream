// Icons Imports
import { BiSearch } from "react-icons/bi";
import { BsSearchHeart, BsStarFill } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";


export const Search = () => {
    return(
        <div className=" items-center  md:mx-36 flex border border-slate-900  rounded-3xl">
                    <input type="text" placeholder="Search Movies || Tv Shows" className="w-full outline-0 py-4 rounded-l-3xl  items-center px-8 uppercase bg-slate-800"/>
                    <IoMdSearch size={60} className="bg-orange-500 hover:bg-orange-600 rounded-r-3xl p-4 w-20 text-white "/>
                </div>
    );
}