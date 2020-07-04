import React from "react";
import styles from "./User.module.css";
import Profile from "../Profile/Profile";
import { Octokit } from "@octokit/rest";
import CircularProgress from "@material-ui/core/CircularProgress";

const octokit = new Octokit();
const userName = "Otosigen";

class User extends React.Component {
  state = {
    isLoadingUser: true,
    isErrorUser: false,
    errorTextUser: "",
    user: {},
  };

  componentDidMount() {
    octokit.users
      .getByUsername({
        username: userName,
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
    const { isLoadingUser, isErrorUser, errorTextUser, user } = this.state;

    return (
      <section className={styles.user}>
        {isLoadingUser ? (
          <div className={styles.wrap__preloader}>
            <span className={styles.preloader}>
              <CircularProgress />
            </span>
          </div>
        ) : null}
        {!isLoadingUser && (
          <div className={styles.info_wrap}>
            {isErrorUser ? (
              <div className={styles.error}>
                <span className={styles.errorTextUser}>{errorTextUser}</span>
              </div>
            ) : (
              <Profile
                avatar={user.avatar_url}
                name={user.name}
                login={user.login}
              />
            )}
          </div>
        )}
      </section>
    );
  }
}

export default User;
