import React from 'react';
import PageLayout from '../core/page-layout.js';

export default class Page extends PageLayout {
    renderMain() {
        return (
            <div>
                <section>Cat Meow React 系统开发框架<a href="/react">开始</a></section>
                <section>最佳实践 自2015年第三季度开始中后台设计，服务于生产环境的稳定框架。<a href="/practice">了解更多</a></section>
                <section>设计思路</section>
                <section>脱离业务逻辑束缚的基础组件，不断打磨的功能需求</section>
                <section>Cute Smart</section>
            </div>
        );
    }
}
