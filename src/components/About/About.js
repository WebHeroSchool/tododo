import React from "react";
import styles from "./About.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Octokit } from "@octokit/rest";
import CardContent from "@material-ui/core/CardContent";
import Profile from "../Profile/Profile";

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoadingRep: true,
    isLoadingUser: true,
    isErrorRep: false,
    isErrorUser: false,
    errorTextRep: "",
    errorTextUser: "",
    repoList: [],
    user: {},
  };

  componentDidMount() {
    octokit.repos
      .listForUser({
        username: "OtoSigen",
      })
      .then(({ data }) => {
        this.setState({
          repoList: data,
          isLoadingRep: false,
        });
      })
      .catch(() => {
        this.setState({
          isLoadingRep: false,
          isErrorRep: true,
          errorTextRep: "Упс, репозитории не найдены!",
        });
      });

    octokit.users
      .getByUsername({
        username: "OtoSigen",
      })
      .then(({ data }) => {
        this.setState({
          user: data,
          isLoadingUser: false,
        });
      })
      .catch(() => {
        this.setState({
          isLoadingUser: false,
          isErrorUser: true,
          errorTextUser: "Пользователь не найден!",
        });
      });
  }

  render() {
    const {
      isLoadingRep,
      repoList,
      isErrorRep,
      errorTextRep,
      errorTextUser,
      user,
      isLoadingUser,
      isErrorUser,
    } = this.state;
    return (
      <CardContent className={styles.wrap}>
        <div className={styles.aboutme}>
          <h1 className={styles.title}>Обо мне</h1>
          {!isLoadingUser && (
            <div>
              {isErrorUser ? (
                errorTextUser
              ) : (
                <Profile
                  avatar={user.avatar_url}
                  name={user.name}
                  login={user.login}
                />
              )}
            </div>
          )}
        </div>
        <div className={styles.repo}>
          {isLoadingRep ? <CircularProgress /> : "Список репозиториев:"}
          {!isLoadingRep && (
            <div>
              {isErrorRep ? (
                errorTextRep
              ) : (
                <ol>
                  {repoList.map((repo) => (
                    <li key={repo.id}>
                      <a href={repo.svn_url}>{repo.name}</a>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          )}
        </div>
      </CardContent>
    );
  }
}

export default About;
