'use strict';
const { Component } = React;
const { render } = ReactDOM;

class LiveCycleConstructor extends React.Component {
    constructor(props) {
        super(props); //verplicht
        console.log(props.first);
        console.log(props.second);
    }

    render() {
        return <div>{this.props.first} {this.props.second}</div>;
    }
}


ReactDOM.render(<LiveCycleConstructor first="Hello" second="World!" />, document.getElementById('target1'));


