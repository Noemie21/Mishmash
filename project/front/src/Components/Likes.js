import React, { useState, useEffect, useContext } from 'react'
import { FaHeart } from 'react-icons/fa'
import { StoreContext } from '../Providers/StoreProvider';
import { editLikes } from '../Services/API';

export default function Likes() {

  const { likes } = useContext(StoreContext)
  const { refresh } = useContext(StoreContext)


  if (Object.values(likes).length > 0) {
    console.log(likes.number)
  }
  if (Object.values(likes).length > 0) {
  return (
    <div class="fixed top-[600px] right-[64px] flex justify-center flex-col items-center hover:text-red-600">
        <FaHeart 
          className="text-yellow text-4xl hover:text-red-600" 
          onClick={(async () => {
            let response = await editLikes()
            refresh()})}/>
        <p className="text-yellow font-semibold">{likes.number}</p>
    </div>
  );
  }
}
