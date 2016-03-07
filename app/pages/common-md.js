import React from 'react';
import PageLayout from '../core/page-layout.js';

export default class Page extends PageLayout {
    renderMainContent() {
        let { readme } = MYM;

        return (
			<div className="col-md-9">
				<div dangerouslySetInnerHTML={{__html: readme}} />
			</div>
		)
    }
}
