import React from 'react';


export const Header = () => {
    return (
        <header>
            <div className="header">
                <a href="/" className="logo">CompanyLogo</a>
                <div className="header-right">
                    <a className="active" href="/">Home</a>
                    <a href="products">Products</a>
                    <a href="user">User</a>
                </div>
            </div>
            {/* <div className='Header'>Dog Store
                <span className='logo'></span>
                <ul className='nav'>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className='presentation'></div> */}
        </header>
    )
}
