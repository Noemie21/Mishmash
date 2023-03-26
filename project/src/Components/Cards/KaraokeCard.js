import React from 'react'
import './Card.css'
import { GiMicrophone } from 'react-icons/gi'

export default function KaraokeCard() {
  return (
    <div class="w-[45%] h-[35vh] rounded-3xl shadow-card relative">
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
  );
}
