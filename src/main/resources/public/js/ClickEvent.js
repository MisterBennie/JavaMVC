'use strict';
const { Component } = React;
const { render } = ReactDOM;

class ClickEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return (
            <div>
                <button  onClick={() => this.setState({ count: this.state.count + 1 })}>
                    number of clicks {this.state.count}
                </button>
            </div>
        );
    }
}

const domContainer = document.querySelector('#click_event_container');
ReactDOM.render(<ClickEvent />, domContainer);
