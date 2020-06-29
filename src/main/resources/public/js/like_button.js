'use strict';
const { Component } = React;
const { render } = ReactDOM;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.message = <h1>Hello, world!</h1>;
  }

  render() {
    if (this.state.isClicked) {
      return (this.message);
    }

    return (
        <button onClick={() => this.setState({isClicked: true})}>Like</button>
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);
