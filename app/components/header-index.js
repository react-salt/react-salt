import React from 'react';

function Header(props) {
	return (
		<header className="header-nav">
			<ul className="clearfix">
				{
					props.data.map((item, index) => {
						return (
							<li key={index}>
								<a href={item.href}>{item.name}</a>
							</li>
						);
					})
				}
			</ul>
		</header>
	);
}

export default Header;