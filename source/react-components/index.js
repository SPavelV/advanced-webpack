import React from "react";
import { hot } from "react-hot-loader/root";
import ReactDOM from "react-dom";

// Styles
import Styles from "./postcss.css";
import kitty from "../theme/images/kitty.jpg";

import { Button } from "./Button";

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
          "--mainColor": "orange",
          "--headingFontSize": `${this.state.count}px`,
        }}
      >
        <img src={kitty} alt="" />
        <h1>Test!!!:</h1>
        <Button onClick={this.handleClick}>
          {this.state.isToggleOn ? "Включено!!" : "Выключено"}
        </Button>
      </section>
    );
  }
}

const WithHot = hot(Toggle);

ReactDOM.render(<WithHot />, document.getElementById("app"));
