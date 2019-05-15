import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => (
    <div className='nav'>
        <ul>
            <li>
                <NavLink to='/' exact activeClassName='active'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/leaderboard' activeClassName='active'>
                    Leaderboard
                </NavLink>
            </li>
            <li>
                <NavLink to='/addpoll' activeClassName='active'>
                    Add Poll
                </NavLink>
            </li>
        </ul>
    </div>
);
