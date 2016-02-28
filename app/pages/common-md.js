import React from 'react';
import PageLayout from '../core/page-layout.js';

export default class Page extends PageLayout {
    renderMainExtra() {
        let { url } = MYM;
        return <div>{url}</div>;
    }
}
