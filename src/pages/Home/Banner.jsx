import React from 'react';
import { easeOut, motion } from "framer-motion";
import Service2 from '../../assets/Service2.png';
import Service3 from '../../assets/Service3.png';

const Banner = () => {
    return (
        <div className="hero bg-base-200 py-8">
            <div className="hero-content flex flex-col-reverse md:flex-row-reverse gap-10 items-center">
                {/* Images Section */}
                <div className='flex flex-col items-center justify-center gap-6 flex-1'>
                    <motion.img
                        src={Service2}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="w-64 sm:w-72 md:w-80 shadow-2xl rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-700"
                    />
                    <motion.img
                        src={Service3}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="w-64 sm:w-72 md:w-80 shadow-2xl rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-700"
                    />
                </div>

                {/* Text Section */}
                <div className='flex-1 text-center md:text-left'>
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{
                            duration: 2,
                            delay: 1,
                            ease: easeOut,
                            repeat: Infinity
                        }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold"
                    >
                        Get The Job <motion.span
                            animate={{ color: ['#ecff33', '#ffb6c1', '#48d1cc'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >Job</motion.span> You Deserve!
                    </motion.h1>
                    <p className="py-6 px-4 md:px-0 text-sm sm:text-base md:w-11/12 mx-auto">
                        ScoreLoop is an interactive service review system designed to build a transparent and trustworthy platform. ScoreLoop empowers you to add services, post and manage reviews, and explore honest opinions from a community that values accountability and improvement. It's not just about reviews—it's about creating a loop of growth and trust.
                    </p>
                    <button className="btn btn-primary mt-2">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
