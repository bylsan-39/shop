import Img1 from "../assets/women-shirt.webp"
import Img2 from "../assets/printed-shirt.webp"
import Img3 from "../assets/men-shirt.webp"
import { FaStar } from "react-icons/fa6"
const ProductsData = [
    {
        id: 1,
        imgage: Img1,
        title: "Women Shirt ",
        descraption: " Deserunt ut dolore expedita nemo sint architecto iusto doloribus nostrum possimus quae at, eligendi nobis non eaque consequatur odio provident harum beatae!",
    },
    {
        id: 2,
        imgage: Img2,
        title: "Printed Shirt ",
        descraption: " Deserunt ut dolore expedita nemo sint architecto iusto doloribus nostrum possimus quae at, eligendi nobis non eaque consequatur odio provident harum beatae!",
    }, {
        id: 3,
        imgage: Img3,
        title: "Men Shirt ",
        descraption: " Deserunt ut dolore expedita nemo sint architecto iusto doloribus nostrum possimus quae at, eligendi nobis non eaque consequatur odio provident harum beatae!",
    },
]
function TopProducts() {

    return (
        <div className="pt-14 pb-12 dark:bg-gray-950 dark:text-white">
            <div className="container">
                {/* header section  */}
                <div className="text-center mb-10 max-w-150 mx-auto ">
                    <p data-aos="fade-up" className="text-sm text-main">Top Rated Products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold "> best Rated Products</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400 ">Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Voluptatem,
                        possimus necessitatibus! Magni.</p>
                </div>
                {/* body section  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 
                place-items-center">
                    {
                        ProductsData.map((data) => (
                            <div
                                data-aos="zoom-in"
                                key={data.id}
                                className="rounded-2xl bg-white dark:bg-gray-800
                            hover:bg-black/80 dark:hover:bg-main hover:text-white 
                            relative shadow-xl duration-300 group max-w-75 mt-23
                            ">
                                {/* image section */}
                                <div
                                    className="h-25 " >
                                    <img src={data.imgage} alt=""
                                        className="max-w-35 block mx-auto transform 
                                        -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md " />
                                </div>
                                {/* card section */}
                                <div className="p-4 text-center ">
                                    {/* star rating  */}
                                    <div className="flex w-full items-center justify-center gap-1">
                                        <FaStar className="text-yellow-500"></FaStar>
                                        <FaStar className="text-yellow-500"></FaStar>
                                        <FaStar className="text-yellow-500"></FaStar>
                                        <FaStar className="text-yellow-500"></FaStar>
                                    </div>
                                    <h1 className="text-xl font-bold">{data.title}</h1>
                                    <p className="text-gray-500 group-hover:text-white 
                                    duration-300 text-sm">{data.descraption}</p>
                                    <button
                                        className="bg-main hover:scale-105 duration-300 text-white
                                    py-1 px-4 rounded-full group-hover:bg-white 
                                    group-hover:text-main my-2 cursor-pointer"
                                    >Order Now</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
export default TopProducts