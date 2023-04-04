import React from 'react'
import { useState } from 'react';
import './Css/SmallCard.css'
import { GiMicrophone } from 'react-icons/gi'
import Flipcard from '@kennethormandy/react-flipcard'
import karaoke from '../../assets/images/karaoke.png'

export default function KaraokeCard() {

  const [flipped, setFlipped] = useState(false)

  return (
    <div onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)} class="w-[45%] h-[35vh] rounded-3xl relative">
      <Flipcard flipped={flipped} type="horizontal" class="w-full" >
          {/* The first child is used as the front of the card */}
          <div class="front">
            <div class="flex flex-row justify-start items-center px-[8%] mt-3">
                <GiMicrophone className="text-card-title text-7xl"/>
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
            <img src={karaoke} alt="" class="object-cover h-full w-full"></img>
          </div>
      </Flipcard>
    </div>
  );
}
