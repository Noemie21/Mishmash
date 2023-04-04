import React from 'react'
import './Head.css'
import coral from '../assets/images/coral.png'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

export default function Head() {
  return (
    <div class="w-screen max-w-screen h-screen max-h-screen">
        <div class="h-1/2 w-screen relative">
            <img src={coral} alt="" class="object-cover h-full w-screen"></img>
            <div class="h-full w-screen gb-yellow absolute top-0 flex flex-col justify-center items-center">
                <h1 class="text-yellow text-9xl bg-transparent">Mishmash Project</h1>
                <div class="flex flex-row w-1/6 justify-between items-center">
                    <a href="https://github.com/Noemie21" rel="noreferrer" target="_blank"><FaGithub className="text-yellow text-5xl hover:scale-125"/></a>
                    <a href="https://www.linkedin.com/in/noémie-k/" rel="noreferrer" target="_blank"><FaLinkedin className="text-yellow text-5xl hover:scale-125"/></a>
                    <a href="mailto:n.kpatenon+portfolio@gmail.com" rel="noreferrer" target="_blank"><FaEnvelope className="text-yellow text-5xl hover:scale-125"/></a>
                </div>
            </div>
        </div>
        <div class="bg-[#8DD7FF] flex h-1/2 w-screen justify-center items-center">
            <p class="w-1/2 font-poppins font-semibold text-4xl text-center text-dark-blue">
                Catch-all project in which I add small projects frequently.
                These projects are coded in React and made entirely by me.
                You can find them on my <a href="https://github.com/Noemie21" rel="noreferrer" target="_blank" class="text-yellow hover:underline hover:underline-offset-4 decoration-2">Github</a>.
            </p>
        </div>
    </div>
  );
}
