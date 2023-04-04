import React from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import { ImQuotesRight } from 'react-icons/im'

export default function QuotePage() {
  return (
    <div class="flex flex-col justify-center items-center" >
        <h2 class="">Quote</h2>
        <div class="w-[45%] h-[35vh] rounded-3xl shadow-card relative flex flex-col justify-center">
            <div class="px-[2%] mt-3">
                <ImQuotesLeft className="text-card-title text-4xl"/>
            </div>
            <p class="text-gray text-xl font-[430] leading-7 text-justify px-[8%] mt-4">
            A shade is created when you add black to a hue.
            Again, when working in Figma, Sketch or any of
            the adobe programs, you can create a shade by
            lowering the brightness value of your hue.
            </p>
            <div class="w-full flex justify-end px-[2%]">
                <ImQuotesRight className="text-card-title text-4xl"/>
            </div>
            <p class="w-auto mx-auto">Author name</p>
        </div>
        <button>New Quote</button>
    </div>
  );
}