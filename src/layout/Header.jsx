import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { removeUser } from '../reduxtoolkit/slices/userSlice';

export const Header = () => {
    const navigate = useNavigate()
    const { token } = useSelector(state => state.user);
    // const token = localStorage.getItem('token')
    const dispatch = useDispatch()

    const handleExit = () => {
        localStorage.removeItem('token')
        dispatch(removeUser())
        navigate('/signin')

    }
    return (
        <header>
            <div className="header">
                <Link to="/" className="logo">CompanyLogo</Link>
                <div className="header-right">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'active' : undefined
                        } to="/">
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'active' : undefined
                        } to="/products">
                        Products
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'active' : undefined
                        } to="/user">
                        User
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'active' : undefined
                        } to="/cart">
                        Cart
                    </NavLink>
                    {token && <span onClick={handleExit}>Выход</span>}
                </div>
            </div>
        </header>
    )
}
