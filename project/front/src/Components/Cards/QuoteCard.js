import React, { useState } from 'react'
import './Css/SmallCard.css'
import { BsChatLeftQuote } from 'react-icons/bs'
import Flipcard from '@kennethormandy/react-flipcard'
import coral from '../../assets/images/coral.png'


export default function QuoteCard() {

    const [flipped, setFlipped] = useState(false)

  return (
    <div class="w-full h-[35vh] rounded-3xl shadow-card relative bg-white">
        <div class="flex flex-row justify-start items-center px-[4%] mt-6">
            <BsChatLeftQuote className="text-card-title text-7xl"/>
            <h3 class="text-card-title text-3xl font-[670] tracking-[.03em] ml-3">Title</h3>
        </div>
        <div class="flex flex-row justify-between items-center">
            <p class="w-[48%] text-gray text-xl font-[430] leading-7 text-justify px-[4%] mt-4">
                A shade is created when you add black to a hue.
                Again, when working in Figma, Sketch or any of
                the adobe programs, you can create a shade by
                lowering the brightness value of your hue.
            </p>
            <p class="w-[48%] text-gray text-xl font-[430] leading-7 text-justify px-[4%] mt-4">
                A shade is created when you add black to a hue.
                Again, when working in Figma, Sketch or any of
                the adobe programs, you can create a shade by
                lowering the brightness value of your hue.
            </p>
        </div>
        {/* <div onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)} class="w-full h-[35vh] rounded-3xl shadow-card relative">         
            <Flipcard flipped={flipped} type="horizontal" class="w-full" > */}
                {/* The first child is used as the front of the card */}
                {/* <div class="front">
                    <div class="flex flex-row justify-start items-center px-[4%] mt-6">
                        <BsChatLeftQuote className="text-card-title text-7xl"/>
                        <h3 class="text-card-title text-3xl font-[670] tracking-[.03em] ml-3">Title</h3>
                    </div>
                    <div class="flex flex-row justify-between items-center">
                        <p class="w-[48%] text-gray text-xl font-[430] leading-7 text-justify px-[4%] mt-4">
                            A shade is created when you add black to a hue.
                            Again, when working in Figma, Sketch or any of
                            the adobe programs, you can create a shade by
                            lowering the brightness value of your hue.
                        </p>
                        <p class="w-[48%] text-gray text-xl font-[430] leading-7 text-justify px-[4%] mt-4">
                            A shade is created when you add black to a hue.
                            Again, when working in Figma, Sketch or any of
                            the adobe programs, you can create a shade by
                            lowering the brightness value of your hue.
                        </p>
                    </div>
                </div> */}
                {/* The second child is used as the back of the card */}
                {/* <div class="card relative">
                    <img src={coral} alt="" class="object-cover h-full w-screen"></img>
                </div>
            </Flipcard> 
        </div>*/}
    </div>
  );
}