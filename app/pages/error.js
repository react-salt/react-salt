import React from 'react';
import PageLayout from '../core/page-layout.js';
import { Footer } from '../../src/layout';
import Header from '../components/header-index.js';

export default class Page extends PageLayout {
	render() {
		return (
            <div>
				<Header data={this.system.navigation} />
				<section className="logo-wrap">
					<h1>404</h1>
				</section>
				<Footer system={this.system} />
            </div>
        );
	}
}