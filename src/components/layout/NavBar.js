import React from 'react'


export default function NavBar() {
    return (

        <div className='flex justify-between  mt-10'>
            <h3 className='ml-5'>Logo</h3>
            <ul className='flex justify-center'>
                <li className='pr-5'>Home</li>
                <li className='pr-5'>About</li>
                <li>Contact Us</li>
            </ul>
            <button className='mr-5 bg-red-500 text-white rounded-md border-2 pr-2 pl-2 bg'>Portfolio</button>
        </div>

    )
}
