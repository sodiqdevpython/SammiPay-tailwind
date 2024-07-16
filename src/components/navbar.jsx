import { useState } from 'react';
import { logo, menu, close } from '../assets/index';
import { styles } from '../utils/style';

function Navbar() {

    const [isClosedMenu, setIsClosedMenu] = useState(true);

    function toggleMenu() {
        if (isClosedMenu) {
            setIsClosedMenu(false)
        } else {
            setIsClosedMenu(true)
        }
    }

    return (
        <div className='flex justify-around py-5 sticky top-0 bg-[#0d101b]'>
            {/* Logo */}
            <div className='w-1/2'>
                <img src={logo} alt="Rasm yo'q" />
            </div>
            {/* /Logo */}

            {/* Right side */}
            <div className='md:flex md:items-center hidden'>
                <ul className='flex space-x-8'>
                    <li className={`${styles.navItemHover}`}>
                        <a className={`${styles.navItem}`} href="http://localhost:3000/">Home</a>
                    </li>
                    <li className={`${styles.navItemHover}`}>
                        <a className={`${styles.navItem}`} href="http://localhost:3000/">Services</a>
                    </li>
                    <li className={`${styles.navItemHover}`}>
                        <a className={`${styles.navItem}`} href="http://localhost:3000/">Products</a>
                    </li>
                    <li className={`${styles.navItemHover}`}>
                        <a className={`${styles.navItem}`} href="http://localhost:3000/">Clients</a>
                    </li>
                </ul>
            </div>

            {/* /Right side */}

            {/* Togle menu */}
            <div className='md:hidden'>
                <img className='w-[42px] self-center' onClick={toggleMenu} src={isClosedMenu ? menu : close} alt="Nimadir xato ketdi" />
            </div>
            {/* /Togle menu */}

            {/* Bottom side */}
            <div className={`${!isClosedMenu ? 'md:hidden bg-primary absolute top-20 w-full py-6 sidebar bg-black-gradient' : 'hidden'}`}>
                <ul className='flex flex-col'>
                    <li className={`${styles.navItemHover}`}>
                        <a className={`${styles.navItem}`} href="http://localhost:3000/">Home</a>
                    </li>
                    <li className={`${styles.navItemHover}`}>
                        <a className={`${styles.navItem}`} href="http://localhost:3000/">Services</a>
                    </li>
                    <li className={`${styles.navItemHover}`}>
                        <a className={`${styles.navItem}`} href="http://localhost:3000/">Products</a>
                    </li>
                    <li className={`${styles.navItemHover}`}>
                        <a className={`${styles.navItem}`} href="http://localhost:3000/">Services</a>
                    </li>
                </ul>
            </div>
            {/* /Bottom side */}

        </div>
    )
}

export default Navbar;
