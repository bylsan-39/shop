import { FaFacebook, FaInstagram, FaLinkedin, FaRegHeart } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { MdMessage, MdCall } from "react-icons/md";
function Footer() {
    const FooterLinks = [
        {
            title: "Home",
            link: "/#",
        },
        {
            title: "About",
            link: "/#",
        },
        {
            title: "Contact",
            link: "/#",
        },
        {
            title: "Blog",
            link: "/#",
        },

    ]
    return (
        <div className="text-white bg-black/90">
            <div className="container">
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                    {/* company details */}
                    <div className="py-8 px-4 ">
                        <div className=" flex  justify-center items-center font-bold text-main">
                            <h1 className="text-4xl  mb-3 mr-3">
                                FunShop
                            </h1>
                            <FaRegHeart className="text-2xl" />
                        </div>
                        <p className="text-center text-gray-300 leading-loose ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam omnis blanditiis tempora aspernatur, cum fuga!
                        </p>
                    </div>
                    {/* footer links  */}
                    <div className="grid grid-cols-1 md:pl-10 mx-auto">
                        <div className="py-8 mx-4">
                            <h1
                                className="text-2xl font-bold mb-3"
                            >Important Links</h1>
                            <ul className="grid grid-cols-2 gap-4 ">
                                <div>
                                    {
                                        FooterLinks.map((data) => (
                                            <li
                                                className="hover:text-main ml-5 "
                                                key={data.id}><a href={data.link}>{data.title}</a></li>
                                        ))
                                    }
                                </div>
                                <div className="flex flex-col gap-4 ml-6">
                                    <FaFacebook className="text-xl"></FaFacebook>
                                    <FaInstagram className="text-xl"></FaInstagram>
                                    <FaLinkedin className="text-xl"></FaLinkedin>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="py-8 px-4 mx-auto">
                        <h1 className="text-2xl font-bold mb-3">Contact Us Any Time</h1>
                        <div className="flex">
                            <HiLocationMarker className="text-3xl px-1"></HiLocationMarker>
                            <p>: Bylsan , somewhere on the Earth</p>
                        </div>
                        <div className="flex">
                            <MdMessage className="text-3xl px-1"></MdMessage>
                            <p>: ********@gmail.com</p>
                        </div>
                        <div className="flex">
                            <MdCall className="text-3xl px-1"></MdCall>
                            <p>: 0992******</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer