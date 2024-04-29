

const Testimonial = () => {
    return (
        <div className="w-[80%] mx-auto my-14">
            <div className="my-8 dark:bg-gray-100 dark:text-gray-800">


                <div className="pb-20">
                    <p className="text-2xl text-center py-8">What our customers are saying</p>
                    <p className="text-center">Step into a world where each stroke tells a story. Hear what our customers have to say about their transformative experiences with our art.</p>
                </div>


                <div className="container flex items-center justify-center mx-auto md:flex-row lg:justify-around lg:px-10">
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Breathtaking! Each painting is a masterpiece, adding soul to my home. Thank you for your talent!
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                            <img src="https://i.ibb.co/DkkPqbT/A2.jpg" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center object-cover bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300" />
                            <p className="text-xl font-semibold leading-tight">Muhammad ALi</p>
                            <p className="text-sm uppercase">Programmer</p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Absolutely stunning art! The colors and emotions conveyed speak volumes. A true delight for the senses.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                            <img src="https://i.ibb.co/Mg2QYsQ/a1.jpg" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center object-cover bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300" />
                            <p className="text-xl font-semibold leading-tight">Lucia</p>
                            <p className="text-sm uppercase">Collector</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Testimonial;