import Link from 'next/link';
import Image from 'next/image';
import navStyle from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div className='container'>
            <Image src='/logo.png' width={40} height={40}></Image>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navmenu'>
                    <ul className='navbar-nav mx-auto '>
                        <li className='nav-item'> <Link href='/'><a className={navStyle.navLink}>Home</a></Link></li>
                        <li className='nav-item'> <Link href='/profile'><a className={navStyle.navLink}>Profile</a></Link> </li>
                        <li className='nav-item'> <Link href='/browse'><a className={navStyle.navLink}>Browse</a></Link> </li>
                    </ul>
                    <li> <Link href='/logout'><a className={navStyle.navLink}>Log out</a></Link> </li>
                </div>
            </div>
        </nav>
    )
}

export default Nav;