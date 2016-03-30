import React from 'react';
import PageLayout from '../core/page-layout.js';
import Salt from '../../index.js';
import BaseInfo from '../api/base-info.js';

export default class Page extends PageLayout {
    renderMainContent() {
        let dataList = BaseInfo[MYM.type];
        console.log(BaseInfo);
        return (
			<div className="col-sm-18">
                <ul className="wrapper-member-list clearfix">
                    {
                        dataList.map((item, index) => {
                            return (
                                <li key={index} className="pull-left">
                                    <Salt.Panel>
                                        <a href={item.link ? item.link : 'https://github.com/react-salt'} target="_blank" className="pull-left">
                                            { item.img && <img src={item.img} /> }
                                            { item.title && <h2>{item.title}</h2> }
                                        </a>
                                        <p>{item.content}</p>
                                    </Salt.Panel>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

}
