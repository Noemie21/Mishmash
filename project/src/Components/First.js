import React from 'react'
import ToDoListCard from './Cards/ToDoListCard';
import QuoteCard from './Cards/QuoteCard';
import KaraokeCard from './Cards/KaraokeCard';

export default function First() {
  return (
    <div class="h-screen flex justify-between h-screen py-[8%]">
        <div class="h-full flex flex-col justify-between">
            <div class="flex flex-row justify-between items-center">
            <ToDoListCard />
            <KaraokeCard />
            </div>
            <QuoteCard />
        </div>      
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