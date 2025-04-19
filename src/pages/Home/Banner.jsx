import React from 'react';
import {easeInOut, easeOut, motion} from "framer-motion"
import Service2 from '../../assets/Service2.png'
import Service3 from '../../assets/Service3.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>
    <motion.img
      src={Service2 }
      animate={{y:[50,100,50]}}
      transition={{duration:10,repeat:Infinity}}
      className="max-w-sm w-64 shadow-2xl rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-700 " />
    <motion.img
      src={Service3  }
      animate={{x:[100,150,100]}}
      transition={{duration:10,repeat:Infinity}}
      className="max-w-sm w-64 shadow-2xl rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-700 " />
    </div>
    <div className='flex-1'>
      
      <motion.h1 
        animate={{x:50,color:['blue']}}
        transition={{duration:2,delay: 1,ease:easeOut,
            repeat:Infinity
        }}
       className="text-5xl font-bold">Get The Job <motion.span animate={{ color: ['#ecff33', '#ffb6c1', '#48d1cc'] }}
       transition={{duration:1.5,repeat:Infinity}}
       > Job</motion.span>You Deserve!</motion.h1>
      <p className="py-6 w-11/12 mx-auto">
      ScoreLoop is an interactive service review system designed to build a transparent and trustworthy platform. ScoreLoop empowers you to add services, post and manage reviews, and explore honest opinions from a community that values accountability and improvement. It's not just about reviews—it's about creating a loop of growth and trust.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;