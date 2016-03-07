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
        name: 'React Salt',
        href: '/react/salt'
    }, {
        name: '快速上手',
        href: '/react/get-started'
    }, {
		name: 'Panel',
		href: '/react/components/panel'
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
		href: 'https://gitter.im/Sobranier/react-salt?utm_source=share-link&utm_medium=link&utm_campaign=share-link'
	}]
}];

export default {
    menuData: menuData
}
