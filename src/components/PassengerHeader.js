import React, { useState } from 'react';
import { AiFillDashboard } from 'react-icons/ai';
import { FaBusAlt } from 'react-icons/fa';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { RiWechatPayFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import './PassengerHeader.css';

const PassengerHeader = () => {
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const activateNav = () => {
        setActive(!active);
    };

    const handleIconClick = (path) => {
        navigate(path);
    }

    return (
        <div
            className={active
                ? 'header'
                : 'header-mobile'}>
            <div className='menu-icon' onClick={activateNav}>
                {
                    !active
                        ? <IoMdMenu className='menu'/>
                        : <IoMdClose className='menu'/>
                }
            </div>
            <nav>
                <ul
                    className={active
                        ? 'ul-item'
                        : 'ul-item oicon'}>
                    <li>
                        {/*icon */}
                        <AiFillDashboard className='icon' onClick={() => handleIconClick('/PassengerDashboard')}/> {/*link */}
                        <Link to='/PassengerDashboard' className='transition2'>Dashboard</Link>
                    </li>

                    <li>
                        {/*icon */}
                        <FaBusAlt className='icon' onClick={() => handleIconClick('/')}/> {/*link */}
                        <Link to='/' className='transition3'>Trips</Link>
                    </li>

                    <li>
                        {/*icon */}
                        <RiWechatPayFill className='icon' onClick={() => handleIconClick('/')}/> {/*link */}
                        <Link to='/' className='transition4'>Recharge</Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default PassengerHeader;
