import React from 'react'

export default function ServiceCard({ title, body, image }) {
    return (
        <div className='flex flex-col md:flex-row relative top-1/4 my-5 items-center cursor-pointer feature-card py-5 rounded-xl px-2 transition-all'>
            <div>
                <img className='md:w-20 w-12 hover:blur transition-all duration-1000' src={image} alt="Nimadir xato ketdi" />
            </div>
            <div className='ms-3 mt-5 md:mt-0'>
                <h5 className='font-montserrat text-Light font-semibold text-xl'>{title}</h5>
                <p className='text-white font-montserrat'>{body}</p>
            </div>
        </div>
    )
}
