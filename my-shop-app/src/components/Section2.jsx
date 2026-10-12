import { GrSecure } from "react-icons/gr";
import Image from "../assets/section2.JPG"
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
function Section2() {

    return (
        <div className="min-h-137.5 flex justify-center items-center
         py-12 sm:py-0 dark:bg-gray-950 dark:text-white">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 items-center">
                    {/* image section  */}
                    <div data-aos="zoom-in ">
                        <img src={Image} alt=""
                            className="max-w-100 h-87.5 w-full mx-auto mt-10
                        drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.5)] object-cover"/>
                    </div>
                    {/* text section  */}
                    <div className=" flex flex-col justify-center gap-6 sm:pt-0 items-center">
                        <h1 data-aos="fade-up" data-aos-delay="0"
                            className="text-3xl sm:text-4xl font-bold"
                        >Winter Sale UpTo 50% Off</h1>
                        <p data-aos-delay="200" data-aos="fade-up" className="text-gray-500 text-sm tracking-wide text-center">Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit exercitationem ullam maxime doloremque modi ab,
                            ut eligendi deleniti quidem quaerat nostrum! Ducimus, aperiam quia.</p>
                        <div className="flex flex-col gap-4">
                            <div data-aos="fade-up" data-aos-delay="250" className="flex items-center gap-4">
                                <GrSecure className="text-3xl h-12 w-12 
                                shadow-sm p-2 rounded-full bg-violet-100 dark:bg-violet-400"></GrSecure>
                                <p>Quality Products</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-4">
                                <IoFastFood className="text-3xl h-12 w-12 
                                shadow-sm p-2 rounded-full bg-orange-100 dark:bg-orange-400"></IoFastFood>
                                <p>Fast Delivery</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="350" className="flex items-center gap-4">
                                <GiFoodTruck className="text-3xl h-12 w-12 
                                shadow-sm p-2 rounded-full bg-green-100 dark:bg-green-400"></GiFoodTruck>
                                <p>Easy Payment Methoed</p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="400" className="flex items-center gap-4">
                                <IoFastFood className="text-3xl h-12 w-12 
                                shadow-sm p-2 rounded-full bg-yellow-100 dark:bg-yellow-400"></IoFastFood>
                                <p>Get Offers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Section2