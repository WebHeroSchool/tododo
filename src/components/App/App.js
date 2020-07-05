import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todo from "../Todo/Todo";
import About from "../About/About";
import styles from "./App.module.css";
import Header from "../Header/Header";

const App = () => (
  <Router>
    <main className={styles.wrap}>
      <Header />
      <section>
        <Route path="/" exact component={About} />
        <Route path="/todo" component={Todo} />
      </section>
    </main>
  </Router>
);
export default App;
