'use strict';
const { Component } = React;
const { render } = ReactDOM;

class DynamicJSX extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const elements = ["red", "green", "blue", "purple"];
    const element = <svg viewBox="0 0 200 200">
        {
            // map iterates over the list and returns a list with the result
            elements.map((value, index) => {
                let position = (index + 1) * 30;
                return <circle fill={value} key={index} cx={position} cy={position} r={position} />
            })}
    </svg>;

    return (element);
  }
}

const domContainer = document.querySelector('#dynamic_jsx');
ReactDOM.render(<DynamicJSX />, domContainer);
