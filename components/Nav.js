import Link from 'next/link';
import Image from 'next/image';
import navStyle from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <nav className={navStyle.navBar}>
            <div className={navStyle.container}>
                <div>
                    <h2>LOGO</h2>
                </div>

                <div className={navStyle.navLinks}>
                    <ul>
                        <input type='text' placeholder='Search' className={navStyle.searchBar}></input>
                        <li><a>Home</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;