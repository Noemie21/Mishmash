import React from 'react'
import { useState } from 'react';
import './Css/SmallCard.css'
import { BsCardChecklist } from 'react-icons/bs'
import Flipcard from '@kennethormandy/react-flipcard'
import coral from '../../assets/images/coral.png'

export default function ToDoListCard() {
 
  const [flipped, setFlipped] = useState(false)
 
  return (
    <div onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)} class="card w-[45%] h-[35vh] rounded-3xlrelative">
      <Flipcard flipped={flipped} type="horizontal" class="w-full" >
          {/* The first child is used as the front of the card */}
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
          {/* The second child is used as the back of the card */}
          <div class="card  relative">
            <img src={coral} alt="" class="object-cover h-full w-full"></img>
          </div>
      </Flipcard>
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