import { easeOut, motion } from "framer-motion";
import Service2 from '../../assets/Service2.png';
import Service3 from '../../assets/Service3.png';

const Banner = () => {
    return (
        <div className="hero bg-base-200 py-10 px-4 sm:px-6 md:px-10 lg:px-16">
            <div className="hero-content flex flex-col-reverse md:flex-row-reverse gap-10 items-center">
                {/* Images Section */}
                <div className="flex flex-col items-center justify-center gap-6 flex-1 w-full">
                    <motion.img
                        src={Service2}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="w-52 sm:w-64 md:w-72 lg:w-80 shadow-2xl rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-700"
                        alt="Service Visual 1"
                    />
                    <motion.img
                        src={Service3}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="w-52 sm:w-64 md:w-72 lg:w-80 shadow-2xl rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-700"
                        alt="Service Visual 2"
                    />
                </div>

                {/* Text Section */}
                <div className="flex-1 w-full text-center md:text-left">
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{
                            duration: 2,
                            delay: 1,
                            ease: easeOut,
                            repeat: Infinity
                        }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                    >
                        Get The <motion.span
                            animate={{ color: ['#ecff33', '#ffb6c1', '#48d1cc'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >Job</motion.span> You Deserve!
                    </motion.h1>
                    <p className="py-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto md:mx-0">
                        ScoreLoop is an interactive service review system designed to build a transparent and trustworthy platform. ScoreLoop empowers you to add services, post and manage reviews, and explore honest opinions from a community that values accountability and improvement. It's not just about reviews—it's about creating a loop of growth and trust.
                    </p>
                    <button className="btn btn-primary mt-2">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
