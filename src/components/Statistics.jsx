import React from 'react'
import { statistics } from '../utils/constants'

function Statistics() {
    return (
        <div className='flex flex-wrap flex-row container md:mx-auto py-10 relative ms-3'>
            {statistics.map(item => (
                <div key={item.id} className='flex w-full lg:w-1/3 py-5 '>
                    <h4 className='text-white font-montserrat font-bold text-lg md:text-3xl lg:text-5xl'>{item.value}</h4>
                    <p className='ms-5 text-gradient self-center text-xl'>{item.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Statistics;