import React from "react";
import ReactDOM from "react-dom";

// Styles
import Styles from "./postcss.css";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, count: 34 };
  }

  handleClick = () => {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
      count: ++state.count,
    }));
  };

  render() {
    return (
      <section
        className={Styles.toggler}
        style={{
          "--mainColor": "rebeccapurple",
          "--headingFontSize": `${this.state.count}px`,
        }}
      >
        <h1>Test:</h1>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "Включено!!" : "Выключено"}
        </button>
      </section>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById("app"));
