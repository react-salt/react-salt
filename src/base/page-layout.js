import React from 'react';
import PageBase from './page-base';

import { Header, Footer } from '../layout';

export default class PageLayout extends PageBase {

    renderHeaderContent() {}

    render() {
        return (
            <div>
                <Header system={this.system} renderHeaderContent={this.renderHeaderContent}/>
                <div className="meow-page-content">
                    <div className="meow-page-header">{this.renderHeader()}</div>
                    <div className="meow-page-top-bar">{this.renderTopBar()}</div>
                    <div className="meow-page-main">{this.renderMain()}{this.renderMainExtra()}</div>
                    <div className="meow-page-bottom-bar">{this.renderBottomBar()}</div>
                    <div className="meow-page-footer">{this.renderFooter()}</div>
                </div>
                <Footer system={this.system}/>
            </div>
        );
    }
}
