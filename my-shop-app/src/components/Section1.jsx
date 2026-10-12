import womenImg from "../assets/women.png.webp"
import shoppingImg from "../assets/shopping.png.webp"
import saleImg from "../assets/sale.png.webp"
import SliderPackage from "react-slick";
const Slider = SliderPackage.default || SliderPackage;
const ImgList = [
    {
        id: 1,
        image: shoppingImg,
        title: "UpTo 70% Off On All Men's Wear ",
        descraption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quis veniam recusandae cumque velit repellendus dolorum non molestiae enim, dicta ab a animi ad libero. Sed libero illo nam est!",
    },
    {
        id: 2,
        image: womenImg,
        title: "UpTo 30% Off On All Women's Wear ",
        descraption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quis veniam recusandae cumque velit repellendus dolorum non molestiae enim, dicta ab a animi ad libero. Sed libero illo nam est!",
    },
    {
        id: 3,
        image: saleImg,
        title: "UpTo 50% Off On All Products ",
        descraption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quis veniam recusandae cumque velit repellendus dolorum non molestiae enim, dicta ab a animi ad libero. Sed libero illo nam est!",
    },
]
function Section1() {

    var setting = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "easy-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    return (
        <div className=" relative overflow-hidden
        min-h-137.5 sm:min-h-162 bg-gray-100 flex justify-center items-center
        dark:bg-gray-950 dark:text-white duration-200 ">
            {/* background side */}
            <div className="h-175 w-175 bg-main/40 
            absolute top-[-60%] right-0 rounded-3xl rotate-45 z-9  ">
            </div>
            {/* section1 */}

            <div className="container pb-8 sm:pd-0 z-10 ">
                <Slider {...setting}>
                    {
                        ImgList.map((data) => (
                            <div key={data.id}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 ">
                                    {/* text section */}
                                    <div data-aos="fade-up" className="flex flex-col justify-center gap-4 pt-12 sm:pt-0  text-center 
                        sm:text-left order-2 sm:order-2 z-10 relative">
                                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">{data.title}</h1>
                                        <p className="texr-sm sm:text-base max-w-md ">
                                            {data.descraption}
                                        </p>
                                        <div>
                                            <button
                                                className="bg-gradient-to-r from-main to-white 
                                hover:scale-105 py-2 px-4 rounded-full ml-4 dark:text-black">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/*  img section */}
                                    <div data-aos="zoom-in" className="order-1 sm:order-2">
                                        <div>
                                            <img className=" w-70 h-70 sm:h-100 sm:w-100 sm:scale-112.1 object-contain mx-auto"
                                                src={data.image} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}
export default Section1