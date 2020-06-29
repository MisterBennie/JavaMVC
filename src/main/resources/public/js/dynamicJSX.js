'use strict';
const { Component } = React;
const { render } = ReactDOM;

class DynamicJSX extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const elements = ['one', 'two', 'three'];
    let element = <ul>
        {
            elements.map((value, index) => {
                return <li className="list" key={index}>{value}</li>
        })}
    </ul>;

    return (element);
  }
}

const domContainer = document.querySelector('#dynamic_jsx');
ReactDOM.render(<DynamicJSX />, domContainer);
