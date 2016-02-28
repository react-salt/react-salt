import React from 'react';

export default class PageComponent extends React.Component {
    render() {
        let {url} = MYM;
        return <div>Meow Test: {url}</div>;
    }
}
