import React from 'react'
import Head from '../Components/Head'
import First from '../Components/First';
import Likes from '../Components/Likes';

export default function HomePage() {
  return (
    <div class="" >
        <Head />
        <Likes />
        <div class="h-[200vh] px-[12.5%] bg-gradient-to-b from-[#D8EEFE] to-[#3B429F]">
            <First />
        </div>
    </div>
  );
}