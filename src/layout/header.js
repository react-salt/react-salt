import React from 'react';

let renderHeaderNavigation = (list) => {
    return list.map((item, index) =>
        <li key={index}>
            <a
                href={item.href}
                rel={item.rel ? item.rel : item.name}
                target={item.target ? item.target : '_self'}
            >
                {item.name}
            </a>
        </li>
    );
}

let Header = (props) => {
    return (
        <header className="navbar navbar-default navbar-static-top navbar-dashboard">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a href="/" className="navbar-brand">
                        <span className="logo-img"></span>
                        {props.system && props.system.name ? props.system.name : 'React Salt'}
                    </a>
                </div>
                <div className="collapse navbar-collapse">
                    {props.renderHeaderContent()}
                    <ul className="nav navbar-nav pull-right">
                        {
                            renderHeaderNavigation(props.system && props.system.navigation ?
                                props.system.navigation :
                                [{name: "GitHub", href: "https://github.com/react-salt/react-salt", target: "_blank"}]
                            )
                        }
                    </ul>
                </div>
            </div>
        </header> 
    );
};

export default Header;
