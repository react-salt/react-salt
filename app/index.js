import React from 'react';
import ReactDOM from 'react-dom';

// CatMeow
const CM = window.CM;

class Test extends React.Component {
  render() {
    return <div>Test</div>;
  }
}

ReactDOM.render(<Test />, document.getElementById('app'));
