import React from 'react';
import Navigator from '../navigator'
import './side-bar.css'
const SideBar = ()=>{
    return (
        <div className="sidebar">
            <div className="sharkninja-image border-bottom">
                <img src='https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg' alt='Shark Ninja'/>
                <h6>Shark Ninja</h6>
                <p className="text-center description"> Magic Bullet nutrieBullet 12-piece High-speed Blender/Mixer System</p>
            </div>            
                <ul className="sharkninja-filters border-bottom">
                    <li>Pantry</li>
                    <li>Obsolete</li>
                    <li>Blender</li>
                    <li>Lightning Deal</li>
                </ul>  
                <Navigator/>         
        </div>
    )
}

export default SideBar;