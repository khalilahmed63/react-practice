import React from 'react'
import CardFooter from './CardFooter'
import { useState } from 'react';

export default function NewCard(props) {
    const [mood, setModd] = useState('light');
    console.log('*' + mood + '*', 'mood- value');
    return (
        <div className='border-4 border-green-300  p-4 rounded-md h-60 w-60 bg-gray-100'>
            <p>New Card</p>
            <CardFooter autherName={props.autherName} />
            <button onClick={() => { mood === 'light' ? setModd("dark") : setModd("light") }} className={`${mood !== 'dark' ? '!bg-slate-900 text-white' : '!bg-slate-400 text-black'} border shadow-md rounded-md p-2 mt-10`}>{mood === 'light' ? 'light' : 'dark'}</button>
        </div >
    )
}
