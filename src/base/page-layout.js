import React from 'react';
import PageBase from './page-base';

import { Header, Footer } from '../layout';

export default class PageLayout extends PageBase {

    renderHeaderContent() {}

    render() {
        return (
            <div>
                <Header system={this.system} renderHeaderContent={this.renderHeaderContent}/>
                <div className="salt-page-content">
                    <div className="salt-page-header">{this.renderHeader()}</div>
                    <div className="salt-page-top-bar">{this.renderTopBar()}</div>
                    <div className="salt-page-main">{this.renderMain()}{this.renderMainExtra()}</div>
                    <div className="salt-page-bottom-bar">{this.renderBottomBar()}</div>
                    <div className="salt-page-footer">{this.renderFooter()}</div>
                </div>
                <Footer system={this.system}/>
            </div>
        );
    }
}
