import React from 'react'
import { useState } from 'react';
import './Card.css'
import { BsCardChecklist } from 'react-icons/bs'

export default function ToDoListCard() {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
 };
 
  const handleMouseLeave = () => {
    setIsHover(false);
  };
// 
  // const boxStyle = {
  //   backgroundColor: isHover ? 'lightblue' : 'rgb(0, 191, 255)',
  // };
  const boxHover = {
    position: 'relative',
    height: '35vh',
    width: '45%',
    'border-radius': '1.5rem',
    'box-shadow': '0 2px 20px 2px rgba(0, 0, 0, 0.08)',
    transform: 'rotateY(180deg)'
  };

  const boxNotHover = {
    position: 'relative',
    height: '35vh',
    width: '45%',
    'border-radius': '1.5rem',
    'box-shadow': '0 2px 20px 2px rgba(0, 0, 0, 0.08)',
  };

  // {isHover === false ? 'bg-blue-600 w-full h-full rounded-3xl shadow-card' : 'bg-green-400'}

 console.log(isHover)


  return (
    // <div class=" w-[45%] h-[35vh] rounded-3xl shadow-card flex items-center justify-center">
    // <div class="-translate-x-[50%] -translate-y-[50%]">
    //   <div 
    //     // class="card w-[45%] h-[35vh] rounded-3xl shadow-card relative"
    //     // style={isHover === true ? boxHover : boxNotHover}
    //     onMouseEnter={handleMouseEnter}
    //     onMouseLeave={handleMouseLeave}
    //   >
    //     <div class="front">
    //         <div class="flex flex-row justify-start items-center px-[8%] mt-3">
    //             <BsCardChecklist className="text-card-title text-7xl"/>
    //             <h3 class="text-card-title text-3xl font-[670] tracking-[.03em] ml-1.5">Title</h3>
    //         </div>
    //         <p class="text-gray text-xl font-[430] leading-7 text-justify px-[8%] mt-4">
    //           A shade is created when you add black to a hue.
    //           Again, when working in Figma, Sketch or any of
    //           the adobe programs, you can create a shade by
    //           lowering the brightness value of your hue.
    //         </p>
    //     </div>
    //     <div class="back">Back</div>
    //   </div>
    // </div>
    // </div>
    <div 
      // class="card w-[45%] h-[35vh] rounded-3xl shadow-card relative"
      // style={isHover === true ? boxHover : boxNotHover}
      style={boxNotHover}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div class="front">
          <div class="flex flex-row justify-start items-center px-[8%] mt-3">
              <BsCardChecklist className="text-card-title text-7xl"/>
              <h3 class="text-card-title text-3xl font-[670] tracking-[.03em] ml-1.5">Title</h3>
          </div>
          <p class="text-gray text-xl font-[430] leading-7 text-justify px-[8%] mt-4">
            A shade is created when you add black to a hue.
            Again, when working in Figma, Sketch or any of
            the adobe programs, you can create a shade by
            lowering the brightness value of your hue.
          </p>
      </div>
      <div class="back">Back</div>
    </div>
  );
}
/*
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.
*/