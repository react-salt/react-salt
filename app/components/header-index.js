import React from 'react';

let Header = (props) => {
	return (
		<header>
			<ul>
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