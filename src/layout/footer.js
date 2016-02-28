import React from 'react';

let Footer = (props) => {
    return (
        <footer>
            <div className="text-center">
                {props.system.name}©2015-{new Date().getFullYear()} Designed By LeSalt Design Studio
            </div>
        </footer> 
    );
};

export default Footer;
