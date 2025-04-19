import React from 'react';
import event from '../../assets/Slide/Event Management.jpg';
import digital from '../../assets/Slide/digital marketing (2).jpg';
import Qdar from '../../assets/Slide/Qdar Media.jpg';

const Slider = () => {
    return (
        <div className='mb-8'>
            <h1 className='text-2xl sm:text-3xl text-center font-bold mb-6'>What You Can Do on ScoreLoop</h1>

            <div className="carousel w-full">

                {/* Slide 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex flex-col md:flex-row items-center w-full p-4 md:p-8 gap-6">
                        <img src={event} alt="Slide 1" className="w-full md:w-1/3 object-cover rounded-lg" />
                        <div className="w-full md:w-2/3 text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Add Services</h2>
                            <p className="text-base sm:text-lg mb-4">
                                Got a service to offer? List it on ScoreLoop and let users discover you!
                            </p>
                            <button className="btn btn-primary">Explore Now</button>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-col md:flex-row items-center w-full p-4 md:p-8 gap-6">
                        <img src={digital} alt="Slide 2" className="w-full md:w-1/3 object-cover rounded-lg" />
                        <div className="w-full md:w-2/3 text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Write Reviews</h2>
                            <p className="text-base sm:text-lg mb-4">
                                Share your real experiences with services you've used—help others make better choices.
                            </p>
                            <button className="btn btn-primary">Discover</button>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex flex-col md:flex-row items-center w-full p-4 md:p-8 gap-6">
                        <img src={Qdar} alt="Slide 3" className="w-full md:w-1/3 object-cover rounded-lg" />
                        <div className="w-full md:w-2/3 text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Explore with Confidence</h2>
                            <p className="text-base sm:text-lg mb-4">
                                Browse services and read authentic reviews from real users.
                            </p>
                            <button className="btn btn-primary">Explore Now</button>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slider;
