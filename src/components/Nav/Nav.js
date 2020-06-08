import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = props => {
    return(
        <li>
            <NavLink to={props.link} exact>{props.title}</NavLink>
        </li>
    )
}

export default Nav;
