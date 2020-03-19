import React from 'react';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Octokit from '@octokit/rest';

const octokit = new Octokit();

class About extends React.Component {
    state = {
        isLoading: true,
        repoList: []
    }

    componentDidMount() {
        octokit.repos.listForUser({
            username: 'OtoSigen'
        }).then(({ data }) => {
            this.setState({
                repoList: data,
                isLoading: false
            });
        });

        octokit.users.getByUsername({
            username: 'OtoSigen'
        })
            .then(({ data }) => {
                this.setState({
                    User: data,
                    isLoadingUser: false,
                });
            })
    }

    render() {
        const { isLoading, repoList, User } = this.state;
        return (
            <div className={styles.wrap}>
                <h1 className={styles.title}>{isLoading ? <CircularProgress /> : 'Обо мне'}</h1>
                {!isLoading && <ol>
                    {repoList.map(repo => (<li key={repo.id}>
                        <a
                            href={repo.svn_url}
                            className={styles['info-about-repository-wrapped__link']}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {repo.name}
                        </a>
                    </li>))}
                </ol>}

            </div>
        );
    }
}

export default About;