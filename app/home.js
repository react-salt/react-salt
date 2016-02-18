import React from 'react';
import ReactDOM from 'react-dom';
import Cat from '../index.js';

class Test extends React.Component {

    _getGridOptions() {
        return [
            { label: '#', name: 'id'},
            { label: '影片名', name:'nm', className: 'col-red' },
            { label: '上映日期', name: 'ct' },
            { label: '人数', name: 'number' },
            { label: '有效', name: 'active' }
        ]
    }

    _getList() {
        let time = new Date(),
            minute = time.getSeconds(),
            dataList = [],
            listNum = 0;

        while (listNum ++ <= 10) {
            dataList.push({
                id: `id-${listNum}-${minute}`,
                nm: '道士下山',
                number: 100,
                active: listNum % 2 === 0 ? true : false,
                ct: time
            });
        }

        return dataList;
    }

    render() {
        return <Cat.Grid columns={this._getGridOptions()} dataList={this._getList()}/>;
    }
}

ReactDOM.render(<Test />, document.getElementById('app'));
