import { NavLink } from 'react-router-dom'
import logo from '../assets/king.png'
import './Header.css'
import { useNavigate } from "react-router-dom"

export function Header() {
    let navigate = useNavigate();
    return (
        <>
            <header className="header-container">
                <img style={{ cursor: "pointer" }}
                    src={logo} alt='logo' width='45px' height='45px' onClick={() => { navigate('/') }} />
                <nav className='nav-bar'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </nav>
            </header>
        </>
    )
}