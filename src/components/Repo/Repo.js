import React from "react";
import styles from "../RepoList/RepoList.module.css";
import RepoItem from "../RepoItem/RepoItem";

const Repo = ({ repoList, firstRepo, lastRepo }) => {
  return (
    <section>
      <div className={styles.wrap}>
        {repoList.length < 7 ? (
          <ol>
            {repoList.map((repo) => (
              <li className={styles.repo__list} key={repo.id}>
                <RepoItem
                  url={repo.svn_url}
                  name={repo.name}
                  language={repo.language}
                  stargazers_count={repo.stargazers_count}
                  forks_count={repo.forks_count}
                  updated_at={repo.updated_at}
                />
              </li>
            ))}
          </ol>
        ) : (
          <div>
            <ol>
              {repoList.slice(firstRepo, lastRepo).map((repo) => (
                <li key={repo.id} className={styles.repo__list}>
                  <RepoItem
                    url={repo.svn_url}
                    name={repo.name}
                    language={repo.language}
                    stargazers_count={repo.stargazers_count}
                    forks_count={repo.forks_count}
                    updated_at={repo.updated_at}
                  />
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
};

export default Repo;
