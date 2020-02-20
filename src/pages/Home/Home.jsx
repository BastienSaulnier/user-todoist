import React from "react";
import Aside from "../../components/Aside/Aside";
import Board from "../../components/Board/Board";
import "./Home.scss";

export default function Home() {
  return (
    <main>
      <Aside />
      <Board />
    </main>
  );
}
