import React from 'react'

export default function Card({ title, body }) {
    return (
        <section className='grid md:grid-cols-3 rounded-2xl bg-discount-gradient container mx-auto py-8 px-8 shadow-2xl'>
            <div className='col-span-2'>
                <h3 className='text-gradient font-montserrat font-semibold text-4xl md:text-6xl'>{title}</h3>
                <p className='text-white mt-4'>{body}</p>
            </div>
            <div className='grid justify-items-end relative'>
                <div className="absolute w-full h-full rounded-full bottom-20 blue__gradient hover:scale-150 transition-all duration-1000" />
                <div className="absolute w-full h-full rounded-full bottom-40 white__gradient hover:scale-150 transition-all duration-1000" />
                <div className="absolute w-full h-full rounded-full bottom-100 blue__gradient hover:scale-150 transition-all duration-1000" />
            </div>
        </section>
    )
}
