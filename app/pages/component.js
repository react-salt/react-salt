import React from 'react';
import PageLayout from '../core/page-layout.js';
import Ex from '../components/example.js';

MYM.list.map((item) => {
	console.log(item);
});

export default class Page extends PageLayout {
    renderMainExtra() {
        let { url, readme, list, cp } = MYM;
        return (
			<div>
				{ url }
				<div dangerouslySetInnerHTML={{__html: readme}} />
				{
					list.map((item, index) => {
						return <Ex cp={cp} name={item} key={index}/>;
					})
				}
			</div>
		)
    }
}
