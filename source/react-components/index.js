import React from "react";
import { hot } from "react-hot-loader/root";
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
    throw new Error("Boom");

    return (
      <section
        className={Styles.toggler}
        style={{
          "--mainColor": "orange",
          "--headingFontSize": `${this.state.count}px`,
        }}
      >
        <h1>Test!!!:</h1>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "Включено!!" : "Выключено"}
        </button>
      </section>
    );
  }
}

const WithHot = hot(Toggle);

ReactDOM.render(<WithHot />, document.getElementById("app"));
