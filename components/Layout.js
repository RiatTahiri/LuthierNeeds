import Nav from './Nav.js';

const Layout = ({children}) => {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}

export default Layout;