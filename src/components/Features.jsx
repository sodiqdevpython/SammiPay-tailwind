import React from 'react'
import Button from './Button'
import ServiceCard from './ServiceCard'
import { send, star, shield } from '../assets/index'

export default function Features() {
    return (
        <section id='features' className='md:flex-row flex flex-col my-5 container mx-auto mt-10 relative'>
            <div className='flex-1'>
                <div className="absolute w-[50%] h-[50%] rounded-full bottom-40 white__gradient" />
                <div className="absolute w-[50%] h-[50%] rounded-full bottom-40 white__gradient" />
                <h3 className='text-3xl text-gradient font-montserrat font-semibold md:text-7xl ms-2 md:ms-0 lg:my-10'>We can offer that services</h3>
                <p className='text-white mt-5 font-montserrat text-sm md:text-lg ms-2 md:ms-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur itaque esse quam, laborum nam commodi a illum quibusdam repudiandae, porro neque deserunt. Tenetur quidem quis corrupti inventore quibusdam ut, fuga, officiis eos ipsum vel quasi aspernatur quam. Excepturi libero in unde, nobis rem fugit error modi ipsam corrupti, ducimus itaque vel veniam corporis, asperiores dolores perspiciatis? Corporis, dicta quo!</p>
                <Button styles={'mt-10 hover:blur-xl transition-all duration-1000 ms-3 md:ms-0'} />
            </div>
            <div className='flex flex-col flex-1'>
                <ServiceCard
                    title={'Transfering'}
                    body={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est quae illo asperiores quis quos possimus distinctio aspernatur autem voluptatum.'}
                    image={star}
                />
                <ServiceCard
                    title={'Transfering'}
                    body={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est quae illo asperiores quis quos possimus distinctio aspernatur autem voluptatum.'}
                    image={shield}
                />
                <ServiceCard
                    title={'Transfering'}
                    body={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est quae illo asperiores quis quos possimus distinctio aspernatur autem voluptatum.'}
                    image={send}
                />
            </div>
        </section>
    )
}
