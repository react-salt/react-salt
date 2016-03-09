import React from 'react';
import Salt from '../../index.js';

export default class Ex extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            show: false
        }
    }

    onClick() {
        this.setState({
            show: !this.state.show
        });
    }

	render() {
		let { code } = this.props;
        let { show } = this.state;

		return (
            <Salt.Panel>
                <div className="example-demo">
                    {this.props.children}
                </div>
                <div className="example-code">
                    <pre dangerouslySetInnerHTML={{__html: code}} style={{display: show ? 'block' : 'none'}}/>
                    <div className="example-arrow text-center">
                        <i className="glyphicon glyphicon-chevron-down" style={{transform: show ? 'rotate(180deg)' : ''}} onClick={this.onClick} />
                    </div>
                </div>
            </Salt.Panel>
		);
	}
}
