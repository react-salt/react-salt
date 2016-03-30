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
        name: '脚手架',
        href: '/practice/yo'
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
        name: '基础',
        className: 'side-subtitle'
    }, {
        name: 'Button',
        href: '/react/components/button',
        className: 'side-subchildren'
    }, {
        name: 'Layout',
        href: '/react/components/csslayout',
        className: 'side-subchildren'
    }, {
        name: '表单',
        className: 'side-subtitle'
    }, {
        name: 'Form',
        href: '/react/components/form',
        className: 'side-subchildren'
    }, {
        name: 'DatePicker',
        href: '/react/components/datepicker',
        className: 'side-subchildren'
    }, {
        name: 'Input',
        href: '/react/components/input',
        className: 'side-subchildren'
    }, {
        name: 'Select',
        href: '/react/components/select',
        className: 'side-subchildren'
    }, {
        name: '展示',
        className: 'side-subtitle'
    }, {
        name: 'Grid',
        href: '/react/components/grid',
        className: 'side-subchildren'
    }, {
        name: 'Notify',
        href: '/react/components/notify',
        className: 'side-subchildren'
    }, {
		name: 'Panel',
		href: '/react/components/panel',
        className: 'side-subchildren'
    }, {
        name: 'DropDown',
        href: '/react/components/dropdown',
        className: 'side-subchildren'
    }, {
        name: 'Pop',
        href: '/react/components/pop',
        className: 'side-subchildren'
    }, {
        name: 'Collapse',
        href: '/react/components/collapse',
        className: 'side-subchildren'
    }, {
        name: 'Alert',
        href: '/react/components/alert',
        className: 'side-subchildren'
    }, {
        name: 'Dialog',
        href: '/react/components/dialog',
        className: 'side-subchildren'
    }, {
        name: 'SweetAlert',
        href: '/react/components/sweetalert',
        className: 'side-subchildren'
    }, {
        name: 'Timeline',
        href: '/react/components/timeline',
        className: 'side-subchildren'
    }, {
        name: 'Loading',
        href: '/react/components/loading',
        className: 'side-subchildren'
    }, {
        name: '导航',
        className: 'side-subtitle'
    }, {
        name: 'BreadCrumb',
        href: '/react/components/breadcrumb',
        className: 'side-subchildren'
    }, {
        name: 'Pagination',
        href: '/react/components/pagination',
        className: 'side-subchildren'
    }, {
		name: 'Tree',
		href: '/react/components/tree',
        className: 'side-subchildren'
    }, {
        name: 'Tab',
        href: '/react/components/tab',
        className: 'side-subchildren'
	}, {
        name: '更新日志',
        href: '/react/logs'
    }]
},{
    name: '资源',
    href: '/resource',
	children: [{
        name: '素材',
        href: '/resource/source'
    }, {
		name: '聊天室',
		href: 'https://gitter.im/Sobranier/react-salt?utm_source=share-link&utm_medium=link&utm_campaign=share-link',
        target: '_blank'
	}, {
        name: 'GitHub',
        href: 'https://github.com/react-salt',
        target: '_blank'
    }]
}];

const members = [{
    link: 'https://github.com/Sobranier',
    img: 'https://avatars3.githubusercontent.com/u/7440073?v=3&s=230',
    content: '负责Beta版Util、UI等工具开发，其他所有组件开发'
}, {
    img: 'https://avatars3.githubusercontent.com/u/7994652?v=3&s=230',
    content: '负责Beta版Form相关组件研发'
}, {
    img: 'https://avatars3.githubusercontent.com/u/8955196?v=3&s=230',
    content: '负责Beta版Server工具、Message组件研发'
}, {
    img: 'https://avatars3.githubusercontent.com/u/1124573?v=3&s=230',
    content: '技术支持，主要内测用户'
}, {
    img: 'https://avatars1.githubusercontent.com/u/3753637?v=3&s=230',
    content: 'Collapse组件研发，主要内测用户'
}];

const yo = [{
    link: 'https://github.com/regether/koa-salt',
    title: 'Koa-Salt',
    content: 'The next full-featured javascript frameworks'
}, {
    link: 'https://github.com/regether/salt-routeify',
    title: 'Salt-Routeify',
    content: 'The next router for koajs'
}, {
    link: 'https://github.com/regether/rs-server',
    title: 'RS-Server',
    content: 'Develop tool for developing React Component'
}, {
    link: 'https://github.com/regether/rs-util',
    title: 'RS-Util',
    content: 'Common Utils for React'
}];

export default {
    menuData: menuData,
    members: members,
    yo: yo
}
