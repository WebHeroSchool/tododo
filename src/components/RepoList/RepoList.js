import React from "react";
import styles from "../RepoList/RepoList.module.css";
import { Octokit } from "@octokit/rest";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "../Button/Button";
import Repo from "../Repo/Repo";

const octokit = new Octokit();
const userName = "OtoSigen";
// ksuburn
//dzimitron
class RepoList extends React.Component {
  state = {
    isLoadingRep: true,
    isErrorRep: false,
    errorTextRep: "",
    repoList: [],
    firstRepo: 0,
    lastRepo: 6,
  };

  componentDidMount() {
    octokit.repos
      .listForUser({
        username: userName,
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
  }

  onClickNext = () => {
    if (this.state.lastRepo < this.state.repoList.length - 1) {
      this.setState({
        firstRepo: this.state.firstRepo + 6,
        lastRepo: this.state.lastRepo + 6,
      });
    }
  };

  onClickBack = () => {
    if (this.state.firstRepo !== 0) {
      this.setState({
        firstRepo: this.state.firstRepo - 6,
        lastRepo: this.state.lastRepo - 6,
      });
    }
  };

  render() {
    const { isLoadingRep, repoList, isErrorRep } = this.state;

    return (
      <section className={styles.repo}>
        {isLoadingRep ? (
          <div>
            <h3 className={styles.title}>Репозитории на github.com</h3>
            <span className={styles.preloader}>
              <CircularProgress />
            </span>
          </div>
        ) : (
          <div>
            {isErrorRep ? (
              <div>
                <h3 className={styles.title}>Репозитории на github.com</h3>
                <div className={styles.norepo}>
                  <div className={styles.error_image}></div>
                  <p className={styles.error_message}>Что-то пошло не так...</p>
                  <p className={styles.message_fix}>
                    Попробуйте{" "}
                    <a className={styles.link} href=".">
                      загрузить
                    </a>{" "}
                    ещё раз
                  </p>
                </div>
              </div>
            ) : (
              <div>
                {repoList.length === 0 ? (
                  <div>
                    <h3 className={styles.title}>Репозитории на github.com</h3>
                    <div className={styles.norepo}>
                      <div className={styles.error_image}></div>
                      <p className={styles.error_message}>
                        Репозитории отсутствуют
                      </p>
                      <p className={styles.message_fix}>
                        Добавьте как минимум один репозиторий на{" "}
                        <a className={styles.link} href="github.com">
                          github.com
                        </a>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className={styles.repo__wrap}>
                    <Repo
                      repoList={repoList}
                      firstRepo={this.state.firstRepo}
                      lastRepo={this.state.lastRepo}
                    />
                    <Button
                      onClickNext={this.onClickNext}
                      onClickBack={this.onClickBack}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </section>
    );
  }
}
export default RepoList;
