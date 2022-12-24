import { Routes, Route, NavLink } from 'react-router-dom';

export function Nav() {
    return (

        <nav >
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                <symbol id="bootstrap" viewBox="0 0 16 16">
                    <title>Bootstrap</title>
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </symbol>
            </svg >
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg className="me-2" fill="currentColor" vertical-align="-.125em" width="40" height="32"><use href="#bootstrap" /></svg>
                    <span className="fs-4">Dhillon</span>
                </NavLink>
                <div className="nav nav-pills">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/promo" className="nav-link">Promo</NavLink>
                    <NavLink to="/intro1" className="nav-link">Articles</NavLink>
                    <NavLink to="/intro2" className="nav-link">About</NavLink>
                    <NavLink to="/intro3" className="nav-link">Contact</NavLink>
                </div>
            </header>
        </nav >
    );
};



//export default Nav;