import React from 'react'
import './Card.css'
import { BsChatLeftQuote } from 'react-icons/bs'


export default function QuoteCard() {
  return (
    <div class="w-full h-[35vh] rounded-3xl shadow-card relative">
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
    </div>
  );
}