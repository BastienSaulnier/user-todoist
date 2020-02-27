import React from "react";
import Aside from "../../components/Aside/index.js";
import Board from "../../components/Board/index.js";
import "./index.scss";

class Home extends React.Component {
  render() {
    return (
      <main>
        <Aside />
        <Board />
      </main>
    );
  }
}

export default Home;
