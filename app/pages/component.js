import React from 'react';
import PageLayout from '../core/page-layout.js';
import Ex from '../components/example.js';

let Examples = [];

MYM.list.map((item) => {
	let name = item.substring(0, item.length - 4);
	let Ex = name[0].toUpperCase() + name.slice(1);
	let Example= require('../../node_modules/cat-' + MYM.cp + '/examples/' + name + '.jsx');
	Examples.push(Example.default);
});

export default class Page extends PageLayout {
    renderMainExtra() {
        let { readme, code } = MYM;
        return (
			<div>
				<div dangerouslySetInnerHTML={{__html: readme}} />
				{
					Examples.map((Example, index) => {
						return (
							<div>
								<Example key={index} />
								<pre dangerouslySetInnerHTML={{__html: code[index]}}/>
							</div>
						);
					})
				}
			</div>
		)
    }
}
