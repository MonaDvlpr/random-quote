import { React, Component } from "react";
import "./styles.css";
import axios from "axios";

class App extends Component {
  state = {
    advice: ""
  };

  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div id="card">
          <h1 className="header">{advice}</h1>
          <button onClick={this.fetchAdvice}>Gimmie Some Advice!</button>
        </div>
      </div>
    );
  }
}

export default App;
