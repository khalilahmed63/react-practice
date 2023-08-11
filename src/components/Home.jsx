import React from 'react'
import NewCard from './NewCard'

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
                <NewCard id={'123223'} autherName='saad'>
                </NewCard>
                <NewCard id={'123223'} autherName='jhatooo'>
                </NewCard>
                <NewCard id={'123223'} autherName='harami jhatooo '>
                </NewCard>
                <NewCard id={'123223'}>
                    <p className="text-red-400">this is a pergraph</p>
                </NewCard>
            </h1>
        </div>
    )
}
