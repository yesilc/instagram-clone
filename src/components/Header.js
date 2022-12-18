import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Search from './Search'
import { logout } from '../firebase'
import Icon from "./Icon";
import classNames from "classnames";
import { useSelector } from 'react-redux';
const Header = () => {

    const user = useSelector(state => state.auth.user)
    return (
        <header className='bg-white border-b border-gray-300'>
            <div className='flex items-center justify-between h-[60px] container mx-auto'>

                <Link to="/">
                    <img className='h-[29px]' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
                </Link>
                <Search></Search>

                <nav className='flex items-center gap-x-5'>
                    <NavLink to="/">
                        {({ isActive }) => <Icon name={isActive ? 'home-filled' : 'home'} size={24} />}
                    </NavLink>
                    <NavLink to="/inbox">
                        {({ isActive }) => isActive ? <Icon name='direct-filled' size={24}></Icon> : <Icon name='direct' size={24}></Icon>}
                    </NavLink>
                    <NavLink to="/">
                        <Icon name='new' size={24}></Icon>
                    </NavLink>
                    <NavLink to="/">
                        <Icon name='explore' size={24}></Icon>
                    </NavLink>
                    <NavLink to="/">
                        <Icon name='heart' size={24}></Icon>
                    </NavLink>
                    <NavLink to={`/${user.username}`}>
                        {({ isActive }) => <img src="/noAvatar.jpg" alt="" className={classNames({
                            "w-6 h-6 rounded-full": true,
                            "ring-1 ring-offset-1	ring-black": isActive
                        })} />}
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header