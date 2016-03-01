import React from 'react';
import PageLayout from '../core/page-layout.js';

export default class Page extends PageLayout {
    renderMainExtra() {
        let { url, readme } = MYM;
        return (
			<div>
				{ url }
				<div dangerouslySetInnerHTML={{__html: readme}} />
			</div>
		)
    }
}
