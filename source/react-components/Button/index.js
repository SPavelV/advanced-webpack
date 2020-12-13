// Styles
import Styles from "./styles.css";

export class Button extends React.Component {
  render() {
    const { children, onClick } = this.props;
    return (
      <button onClick={onClick} className={Styles.button}>
        {children}
      </button>
    );
  }
}
