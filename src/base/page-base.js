import React, { Component } from 'react';

export default class BasePage extends Component {
    constructor(props) {
        super(props); 
        this.initial();
    }

    /*
     *  生命周期相关
     * */
    componentDidMount() {}
    componentWillUnMount() {}

    /*
     * 内部封装
     * */
    initial() {}

    renderHeader() {}
    renderTopBar() {}
    renderMain() {}
    renderMainExtra() {}
    renderBottomBar() {}
    renderFooter() {}

    render() {
        return (
            <div>
                {this.renderHeader()}
                {this.renderTopBar()}
                {this.renderMain()}
                {this.renderMainExtra()}
                {this.renderBottomBar()}
                {this.renderFooter()}
            </div>
        ); 
    }
}
