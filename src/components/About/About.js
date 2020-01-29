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
    }

    render() {
        const { isLoading, repoList } = this.state;
        return (
            <div className={styles.wrap}>
                <h1 className={styles.title}>{isLoading ? <CircularProgress /> : 'Обо мне'}</h1>
                {!isLoading && <ol>
                    {repoList.map(repo => (<li key={repo.id}>
                        {repo.name}
                    </li>))}
                </ol>}

            </div>
        );
    }
}


export default About;