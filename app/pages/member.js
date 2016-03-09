import React from 'react';
import PageLayout from '../core/page-layout.js';
import Salt from '../../index.js';
import BaseInfo from '../api/base-info.js';

export default class Page extends PageLayout {
    renderMainContent() {
        return (
			<div className="col-sm-9">
                <ul className="wrapper-member-list clearfix">
                    {
                        BaseInfo.member.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Salt.Panel>
                                        <a href={item.link ? item.link : 'https://github.com/react-salt'} target="_blank">
                                            <img src={item.img} />
                                        </a>
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
