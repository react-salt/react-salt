const menuData = [{
    name: '首页',
    href: '/'
}, {
    name: '实践',
    href: '/practice',
    children: [{
        name: '实践案例',
        href: '/practice/cases'
    }, {
        name: '框架使用',
        href: '/practice/overall'
    }, {
        name: '成员',
        href: '/practice/members'
    }, {
        name: '覆盖',
        href: '/practice/list'
    }]
}, {
    name: '组件',
    href: '/react',
    children: [{
        name: 'Cat Meow',
        href: '/react/cat-meow'
    }, {
        name: '快速上手',
        href: '/react/get-started'
    }, {
		name: 'Grid',
		href: '/react/components/grid'
	}, {
		name: 'Tree',
		href: '/react/components/tree'
	}, {
        name: '更新日志',
        href: '/react/logs'
    }]
},{
    name: '资源',
    href: '/resource',
	children: [{
		name: '聊天室',
		href: 'https://gitter.im/Sobranier/Cat-Meow?utm_source=share-link&utm_medium=link&utm_campaign=share-link'
	}]
}];

export default {
    menuData: menuData
}
