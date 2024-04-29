import banner1 from '../assets/b1LanPaint.jpg';
import banner2 from '../assets/b2WatPaint.jpg';
import banner3 from '../assets/b3OilPaint.jpg';

import { Zoom } from "react-awesome-reveal";


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-96 mb-20">
                <div id="slide1" className="carousel-item relative w-full">

                    <div className="hero h-96" style={{ backgroundImage: `url(${banner1})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <Zoom>
                                <h1 className="mb-5 text-5xl font-bold">Landscape <br /> Painting</h1>
                                </Zoom>
                                <p className="mb-5">Transform your space into a serene retreat with stunning landscape artworks</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>


                <div id="slide2" className="carousel-item relative w-full">

                    <div className="hero h-96" style={{ backgroundImage: `url(${banner2})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <Zoom>
                                <h1 className="mb-5 text-5xl font-bold">Watercolour <br /> Painting</h1>
                                </Zoom>
                                <p className="mb-5">Dive into a world of vibrant hues and flowing strokes with watercolour masterpieces.</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>



                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">



                    <div className="hero h-96" style={{ backgroundImage: `url(${banner3})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <Zoom>
                                <h1 className="mb-5 text-5xl font-bold">Oil <br /> Painting</h1>
                                </Zoom>
                                <p className="mb-5">Discover the timeless allure of rich textures and bold colors.</p>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>


                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Banner;