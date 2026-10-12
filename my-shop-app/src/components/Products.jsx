import Img1 from "../assets/1.jpg"
import Img2 from "../assets/2.jpg"
import Img3 from "../assets/3.jpg"
import Img4 from "../assets/4.jpg"
import Img5 from "../assets/5.jpg"
import { FaStar } from "react-icons/fa6"
const ProductsData = [
    {
        id: 1,
        image: Img1,
        title: "Women Ethinc",
        rating: 5.0,
        color: "white",
        aosDelay: "0",
    },
    {
        id: 2,
        image: Img2,
        title: "Women western",
        rating: 4.5,
        color: "red",
        aosDelay: "200",
    },
    {
        id: 3,
        image: Img3,
        title: "Goggles",
        rating: 4.7,
        color: "brown",
        aosDelay: "400",
    },
    {
        id: 4,
        image: Img4,
        title: "Printed T-shirt",
        rating: 4.4,
        color: "yellow",
        aosDelay: "600",
    }, {
        id: 5,
        image: Img5,
        title: "Fashion T-shirt",
        rating: 4.5,
        color: "pink",
        aosDelay: "800",
    },
]
function Products() {

    return (
        <div className="pt-14 pb-10 dark:bg-gray-950 dark:text-white">
            <div className="container">
                {/* header section */}
                <div className="text-center mb-10 max-w-150 mx-auto ">
                    <p data-aos="fade-up" className="text-sm text-main">Top Selling Products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold ">Products</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400 ">Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Voluptatem,
                        possimus necessitatibus! Magni.</p>
                </div>
                {/* body section */}
                <div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
                    place-items-center gap-5">
                        {/* card section  */}
                        {
                            ProductsData.map((data) => (
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={data.aosDelay}
                                    key={data.id}
                                    className="space-y-3">
                                    <img src={data.image} alt=""
                                        className="h-55 w-37.5  object-cover rounded-md " />
                                    <div>
                                        <h3 className="font-semibold">{data.title}</h3>
                                        <p className="text-sm text-gray-700">{data.color}</p>
                                        <div className="flex items-center gap-1">
                                            <FaStar className="text-yellow-500"></FaStar>
                                            <span>{data.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* button  */}
                    <div className="flex justify-center items-center">
                        <button data-aos="fade-up" className="text-center mt-15 cursor-pointer bg-main py-2 px-5
                        text-white rounded-full">View All</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Products