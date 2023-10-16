import React, { useState } from 'react';
import { AiFillDashboard } from 'react-icons/ai';
import { FaBusAlt } from 'react-icons/fa';
import {GiPoliceOfficerHead} from 'react-icons/gi';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { MdOutlineBusAlert } from 'react-icons/md';
import {GiSandsOfTime} from 'react-icons/gi';
import {RiSecurePaymentLine} from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import './PassengerHeader.css';

const EmployeeHeader = () => {
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
                        <AiFillDashboard className='icon' onClick={() => handleIconClick('/EmployeeDashboard')}/> {/*link */}
                        <Link to='/EmployeeDashboard' className='transition2'>Dashboard</Link>
                    </li>

                    <li>
                        {/*icon */}
                        <GiSandsOfTime className='icon' onClick={() => handleIconClick('/')}/> {/*link */}
                        <Link to='/DisplayWholeTimeTable' className='transition2'>TimeTable</Link>
                    </li>

                    <li>
                        {/*icon */}
                        <FaBusAlt className='icon' onClick={() => handleIconClick('/')}/> {/*link */}
                        <Link to='/DisplayCrowded' className='transition3'>Assign Bus</Link>
                    </li>

                    <li>
                        {/*icon */}
                        <GiPoliceOfficerHead className='icon' onClick={() => handleIconClick('/')}/> {/*link */}
                        <Link to='/' className='transition4'>Assign Inspector</Link>
                    </li>

                    <li>
                        {/*icon */}
                        <MdOutlineBusAlert className='icon' onClick={() => handleIconClick('/')}/> {/*link */}
                        <Link to='/' className='transition4'>Manage Bus</Link>
                    </li>

                    <li>
                        {/*icon */}
                        <RiSecurePaymentLine className='icon' onClick={() => handleIconClick('/')}/> {/*link */}
                        <Link to='/' className='transition4'>Local Payments</Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default EmployeeHeader;