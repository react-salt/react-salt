import React from 'react';
import Cat from '../../index.js';
import BaseInfo from '../api/base-info.js';

export default class Page extends Cat.PageLayout {
    system = {
        name: 'Meow',
        navigation: BaseInfo.menuData
    }
}
