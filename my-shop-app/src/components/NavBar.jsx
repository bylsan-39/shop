import logo from "../assets/logo1.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";

const menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services",
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#",
    },
    {
        id: 4,
        name: "Men Wear",
        link: "/#",
    },
    {
        id: 5,
        name: "Offers",
        link: "/#",
    },

]
const downLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#",
    },
    {
        id: 1,
        name: "Best Selling",
        link: "/#",
    },
    {
        id: 1,
        name: "Top Rated",
        link: "/#",
    },

]
function NavBar() {
    return (
        <div data-aos="fade-down" className=" shadow-md bg-white dark:bg-gray-900 dark:text-white
        duration-200 relative z-40 ">
            {/* upper NavBar */}
            <div className="bg-main/40 py-3 sm:py-0">
                <div className="container flex justify-between items-center ">
                    <div>
                        <a href="#"
                            className="font-bold text-2xl sm:text-3xl
                            flex gap-2  ">
                            <img src={logo} alt="logo"
                                className="w-10 rounded-full" />
                            FunShop
                        </a>
                    </div>
                    {/* search bar */}
                    <div className="flex justify-between items-center gap-4">
                        <div className="group relative hidden sm:block">
                            <input type="text" placeholder="search"
                                className="w-50 sm:w-50 
                                group-hover:w-75 transition-all
                            duration-300 rounded-full border
                            border-gray-300 px-2 py-1 
                            focus:outline-none focus:border
                            focus:border-main bg-white
                            dark:border-gray-500 
                            dark:bg-gray-800" />
                            <IoMdSearch
                                className="text-gray-500 
                            group-hover:text-main absolute top-1/2 
                        -translate-y-1/2 right-3"/>
                        </div>
                        {/* order button */}
                        <button
                            onClick={
                                () => alert(
                                    "Order Not Ready Yet"
                                )
                            }
                            className=" bg-gradient-to-r from-main to-white 
                        transition-all duration-20 py-1 px-4 rounded-full text-gray-700
                        flex items-center gap-3 group ">
                            <span
                                className=" hidden group-hover:block transition-all duration-200"
                            >order</span>
                            <FaCartShopping
                                className="text-xl drop-shadow-sm cursor-pointer"></FaCartShopping>
                        </button>
                        {/* drakmode switch */}
                        <div>
                            <DarkMode></DarkMode>
                        </div>
                    </div>
                </div>
            </div>
            {/* lower NavBar */}
            < div className="flex justify-center">
                <ul className="sm:flex hidden gap-4 items-center ">
                    {
                        menu.map((data) => (
                            <li key={data.id}>
                                <a
                                    className="inline-block px-4 hover:text-main duration-200"
                                    href={data.link}>{data.name}</a>
                            </li>
                        )
                        )
                    }
                    {/* more links */}
                    <li className="group relative cursor-pointer ">
                        <a href="#"
                            className="flex gap-0 items-center py-2 ">
                            Trending
                            <span>
                                <FaCaretDown
                                    className="transition-all duration-200
                                    group-hover:rotate-180 "></FaCaretDown>
                            </span>
                        </a>
                        <div className=" absolute z-99999 hidden group-hover:block w-37.5
                        rounded-md bg-white p-2 text-black shadow-md dark:bg-gray-900 dark:text-white ">
                            <ul>
                                {
                                    downLinks.map((data) => (
                                        <li key={data.id}>
                                            <a href={data.link}
                                                className="cursor-pointer inline-block w-full 
                                                rounded-md p-2 hover:bg-main/20"> {data.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default NavBar