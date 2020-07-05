import React from "react";
import User from "../User/User";
import RepoList from "../RepoList/RepoList";
import styles from "../App/App.module.css";

const About = () => {
  return (
    <section className={styles.content}>
      <User />
      <RepoList />
    </section>
  );
};

export default About;
