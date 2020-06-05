import React from "react";
import styles from "../RepoItem/RepoItem.module.css";
import classnames from "classnames";

const RepoItem = ({
  url,
  name,
  language,
  stargazersCount,
  forksCount,
  updatedAt,
}) => {
  return (
    <div>
      <a
        href={url}
        className={styles.repo_name_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
      <div className={styles.info_about_repo}>
        <span
          className={classnames({
            [styles.language]: true,
            [styles.html_circle]: language === "HTML",
            [styles.css_circle]: language === "CSS",
            [styles.js_circle]: language === "JavaScript",
          })}
        >
          {language}
        </span>
        <span className={styles.star}>{stargazersCount}</span>
        <span className={styles.forks}>{forksCount}</span>
        <span className={styles.date}>
          {"Updated on " +
            new Date(updatedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
        </span>
      </div>
    </div>
  );
};

export default RepoItem;
