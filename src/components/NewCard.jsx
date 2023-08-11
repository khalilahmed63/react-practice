import React from 'react'
import CardFooter from './CardFooter'

export default function NewCard(props) {
    return (
        <div className='border-4 border-green-300  p-4 rounded-md h-60 w-60 bg-gray-100'>
            <p>New Card</p>
            <CardFooter autherName={props.autherName} />
        </div>
    )
}
