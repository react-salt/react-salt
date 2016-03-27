import React from 'react';
import PageLayout from '../core/page-layout.js';

export default class Page extends PageLayout {
    renderMainContent() {
        let { readme } = MYM;

        return (
			<div className="col-sm-18">
				<div dangerouslySetInnerHTML={{__html: readme}} className="wrapper-marked"/>
			</div>
		)
    }
}
