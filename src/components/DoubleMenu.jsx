import React from 'react'
import Button from './Button'

export default function DoubleMenu({ title, body, image, direction }) {
    return (
        <div className={`flex flex-wrap container md:mx-auto relative mt-32 ${direction}`}>
            <div className='md:flex-1 md:mx-5 lg:ms-10'>
                <h3 className='text-3xl text-gradient font-montserrat font-semibold md:text-7xl ms-2 md:ms-0'>{title}</h3>
                <p className='text-white mt-5 font-montserrat text-sm md:text-lg ms-2 md:ms-0'>{body}</p>
                <Button styles={'mt-10 hover:blur-xl transition-all duration-1000 ms-3 md:ms-0'} />
            </div>
            <div className='md:flex-1'>
                <img src={image} alt="" />
            </div>
            <div className="absolute w-[50%] h-[50%] rounded-full bottom-40 blue__gradient hover:scale-150 transition-all duration-700" />
        </div>
    )
}
