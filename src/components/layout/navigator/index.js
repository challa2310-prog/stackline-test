import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navigator.css";
const Navigator = ()=>{
    const activeStyle = {
        fontWeight: "bold",
        color: "black"
      }

    return (<nav className="side-menu">
        <ul>
            <li><NavLink to="/overview" activeStyle={activeStyle}><span className="mr-4"><i className="fa fa-home"></i></span>OVERVIEW</NavLink></li>
            <li><NavLink to="/sales" activeStyle={activeStyle}><span className="mr-4"><i className="fa fa-bar-chart"></i></span>SALES</NavLink></li>
        </ul>
    </nav>
    )
}

export default Navigator;