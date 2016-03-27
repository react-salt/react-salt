import React from 'react';
import PageBase from './page-base';

import { Header, Footer } from '../layout';

export default class PageLayout extends PageBase {

    renderLayoutHeader() {
        return <Header system={this.system} renderHeaderContent={this.renderHeaderContent}/>;
    }

    renderHeaderContent() {}

    renderLayoutFooter() {
        return <Footer system={this.system}/>;
    }

    render() {
        return (
            <div>
                {this.renderLayoutHeader()}
                <div className="salt-page-content">
                    <div className="salt-page-header">{this.renderHeader()}</div>
                    <div className="salt-page-top-bar">{this.renderTopBar()}</div>
                    <div className="salt-page-main">{this.renderMain()}{this.renderMainExtra()}</div>
                    <div className="salt-page-bottom-bar">{this.renderBottomBar()}</div>
                    <div className="salt-page-footer">{this.renderFooter()}</div>
                </div>
                {this.renderLayoutFooter()}
            </div>
        );
    }
}
