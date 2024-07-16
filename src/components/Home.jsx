import '../index.css';
import { discount, robot } from '../assets';
import Button from './Button';

function Home() {
    return (
        <section id='home' className='flex flex-col md:flex-row container md:mx-auto py-10'>
            {/* Information */}

            {/* Animation image */}
            <div>
                <img className='rounded-md md:hover:translate-y-20 md:hover:translate-x-10 transition-all duration-1000 -z-10 ' src={robot} alt="Nimadir xato ketdi" />
            </div>
            {/* Animation image */}

            <div className='w-full ps-3 md:ps-10 mt-10 lg:mt-0 self-center'>
                <div className='flex font-montserrat pe-8 ps-1 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient w-[80%] md:w-full xl:w-1/2'>
                    <img className='w-14' src={discount} alt="Rasm topilmadi" />
                    <p className='text-slate-300 text-sm  md:text-lg self-center ms-5'><span className='text-Light'>20%</span> discount for <span className='text-Light'>1 month</span></p>
                </div>
                {/* Gradient background */}
                <div className="absolute w-[50%] h-[50%] rounded-full bottom-20 blue__gradient" />
                <div className="absolute w-[50%] h-[50%] rounded-full bottom-40 white__gradient" />
                {/* /Gradient background */}
                <h1 className='capitalize text-2xl md:text-7xl text-lime-50 text-gradient'>New generation payment system</h1>
                <p className='mt-5 font-montserrat text-white font-normal md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt suscipit autem quos quidem tempore aliquid odio fugit voluptatem necessitatibus non.</p>
                <Button styles={'mt-5 absolute hover:cursor-pointer hover:blur-sm transition-ease-in hover:skew-y-12 duration-700'} />
            </div>
            {/* /Information */}
        </section>
    )
}

export default Home;