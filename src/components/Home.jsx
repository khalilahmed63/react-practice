import React from 'react'
import NewCard from './NewCard'

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <div className="flex justify-between max-w-screen-2xl">
                <NewCard id={'123223'} autherName='saad' />
                <NewCard id={'123223'} autherName='jhatooo' />
                <NewCard id={'123223'} autherName='harami jhatooo' />
                <NewCard id={'123223'}>
                    <p className="text-red-400">this is Children prop</p>
                </NewCard>
            </div>
        </div>
    )
}
