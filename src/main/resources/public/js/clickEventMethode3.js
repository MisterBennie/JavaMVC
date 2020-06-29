'use strict';
const { Component } = React;
const { render } = ReactDOM;

class EventHandlerMethode3 extends React.Component {
    constructor(props) {
        super(props);
        this.imageDirectory = "images/";
        this.state = { imageName : "image1.png"};
    }

    handleClick(e) {
        let originalEvent = e.nativeEvent;
        let newImage = "";
        if (this.state.imageName == "image1.png"){
            newImage = "image2.png"
        }
        else{
            newImage = "image1.png"
        }

        this.setState({imageName: newImage});
    }

    render() {
        return (
            <img src={this.imageDirectory + this.state.imageName} onClick={(e) => this.handleClick(e)} />
        );
    }
}

ReactDOM.render(<EventHandlerMethode3 />, document.getElementById('target1'));
ReactDOM.render(<EventHandlerMethode3 />, document.getElementById('target2'));
ReactDOM.render(<EventHandlerMethode3 />, document.getElementById('target3'));
ReactDOM.render(<EventHandlerMethode3 />, document.getElementById('target4'));
ReactDOM.render(<EventHandlerMethode3 />, document.getElementById('target5'));
ReactDOM.render(<EventHandlerMethode3 />, document.getElementById('target6'));