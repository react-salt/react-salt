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
        name: 'Button',
        href: '/react/components/button'
    }, {
        name: 'Grid',
        href: '/react/components/grid'
    }, {
        name: 'Pagination',
        href: '/react/components/pagination'
    }, {
        name: 'BreadCrumb',
        href: '/react/components/breadcrumb'
    }, {
		name: 'Tree',
		href: '/react/components/tree'
    }, {
        name: 'Tab',
        href: '/react/components/tab'
    }, {
		name: 'Panel',
		href: '/react/components/panel'
    }, {
        name: 'DropDown',
        href: '/react/components/dropdown'
    }, {
        name: 'Pop',
        href: '/react/components/pop'
    }, {
        name: 'Collapse',
        href: '/react/components/collapse'
    }, {
        name: 'Dialog',
        href: '/react/components/dialog'
    }, {
        name: 'SweetAlert',
        href: '/react/components/sweetalert'
    }, {
        name: 'DatePicker',
        href: '/react/components/datepicker'
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
	}, {
        name: 'GitHub',
        href: 'https://github.com/react-salt'
    }]
}];

const member = [{
    link: 'https://github.com/Sobranier',
    img: 'https://avatars3.githubusercontent.com/u/7440073?v=3&s=230'
}, {
    img: 'https://avatars3.githubusercontent.com/u/1124573?v=3&s=230'
}, {
    img: 'https://avatars1.githubusercontent.com/u/3753637?v=3&s=230'
}, {
    img: 'https://avatars3.githubusercontent.com/u/7994652?v=3&s=230'
}, {
    img: 'https://avatars3.githubusercontent.com/u/8955196?v=3&s=230'
}];

export default {
    menuData: menuData,
    member: member
}
