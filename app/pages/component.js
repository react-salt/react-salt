import React from 'react';
import PageLayout from '../core/page-layout.js';
import Demo from '../components/example.js';


let Examples = [];

MYM.list.map((item) => {
	let name = item.substring(0, item.length - 4);
	let Example= require('../../node_modules/rs-' + MYM.cp + '/examples/' + name + '.jsx');
	Examples.push(Example.default);
});

export default class Page extends PageLayout {
    renderMainContent() {
        let { readme, code } = MYM;

        return (
			<div className="col-sm-18">
				<div dangerouslySetInnerHTML={{__html: readme}} className="wrapper-marked" />
                <h2>代码DEMO<i className="glyphicon glyphicon-leaf" /></h2>
				{
					Examples.map((Example, index) => {
                        return (
                            <Demo key={index} code={code[index]}>
								<Example />
							</Demo>
						);
					})
				}
			</div>
		)
    }
}
