import SliderPackage from "react-slick";
const Slider = SliderPackage.default || SliderPackage;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../assets/Ter1 (1).jpg"
import Img2 from "../assets/Ter1 (2).jpg"
import Img3 from "../assets/Ter1 (3).jpg"
import Img4 from "../assets/Ter1 (4).jpg"
import Img5 from "../assets/Ter1 (5).jpg"
const TestimonialData = [
    {
        id: 1,
        name: "Victor Lion",
        text: "Mollitia alias sunt eaque voluptatibus, ipsa id debitis, minus non quibusdam placeat dolores provident odio temporibus ducimus quam sequi",
        image: Img1,
    },
    {
        id: 2,
        name: "Mia Winhouse",
        text: "Mollitia alias sunt eaque voluptatibus, ipsa id debitis, minus non quibusdam placeat dolores provident odio temporibus ducimus quam sequi",
        image: Img2,
    },
    {
        id: 3,
        name: "Lucas Vigga",
        text: " Mollitia alias sunt eaque voluptatibus, ipsa id debitis, minus non quibusdam placeat dolores provident odio temporibus ducimus quam sequi",
        image: Img3,
    },
    {
        id: 4,
        name: "Emma Waterson",
        text: " Mollitia alias sunt eaque voluptatibus, ipsa id debitis, minus non quibusdam placeat dolores provident odio temporibus ducimus quam sequi",
        image: Img4,
    },
    {
        id: 5,
        name: "Leonour Jenuour",
        text: " Mollitia alias sunt eaque voluptatibus, ipsa id debitis, minus non quibusdam placeat dolores provident odio temporibus ducimus quam sequi",
        image: Img5,
    },
]

function Testimonial() {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className=" dark:bg-gray-950 dark:text-white">
            <div className="container">
                {/* header  */}
                <div className="text-center mb-10 max-w-150 mx-auto ">
                    <p data-aos-delay="100" data-aos="fade-up" className="text-sm text-main">what Our Customers Are Saying </p>
                    <h1 data-aos-delay="100" data-aos="fade-up" className="text-3xl font-bold ">Testimonials</h1>
                    <p data-aos-delay="100" data-aos="fade-up" className="text-xs text-gray-400 ">Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Voluptatem,
                        possimus necessitatibus! Magni.</p>
                </div>
                {/* testimonials card */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>{
                        TestimonialData.map((data) => (
                            <div className="my-6">
                                <div key={data.id}
                                    className="flex flex-col gap-6 shadow-lg
                                py-8 px-5 mx-4 rounded-xl 
                        dark:bg-gray-800 bg-main/10 relative">
                                    <div>
                                        <img src={data.image} alt=""
                                            className="w-20 h-20 rounded-full" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">{data.text}</p>
                                        <h1 className="text-xl font-bold text-black/50 dark:text-main my-3">{data.name}</h1>
                                    </div>
                                </div>
                            </div >
                        ))
                    }
                    </Slider>
                </div>
            </div>
        </div>
    );
}
export default Testimonial