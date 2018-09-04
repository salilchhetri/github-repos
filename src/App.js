import React, { Component } from 'react';
import axios from 'axios'
import { appConfig } from './config';
import logo from './logo.svg';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Repositories from './components/repositories/Repositories';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      noReposMessage: '',
      isLoading: true
    }
  }

  setCurrentUser = (user) => {
    this.setState({ repos: [] })
    this.setState({ currentUser: user });
    this.fetchRepositories(user)
  }


  fetchRepositories(user) {
    this.setState({ isLoading: true });
    this.setState({ noReposMessage: '' })
    axios({
      url: appConfig.apiEndpoint,
      method: 'post',
      headers: { "Authorization": "bearer " + appConfig.token },
      data: {
        query: `
        {
          user(login: ${user}) {
            repositories(first: 50, isFork: false) {
              nodes {
                name
                description
                url
                stargazers {
                  totalCount
                }
                watchers {
                  totalCount
                }
              }
            }
          }
        }
          `
      }
    }).then((result) => {
      this.setState({ isLoading: false });
      if (!result.data.errors) {
        this.setState({ repos: result.data.data.user.repositories.nodes, noReposMessage: '' })

      } else {
        this.setState({ noReposMessage: `Opps! There are no repositories for the "${this.state.currentUser}".` })
      }
    });
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Form setCurrentUser={this.setCurrentUser} />
          <div className="text-center mt-5">
            <div hidden={!this.state.isLoading}>
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Loading...</h2>
            </div>
            <h3>{this.state.noReposMessage}</h3>
          </div>
          <Repositories repos={this.state.repos} />
        </div>
      </div>
    );
  }
}

export default App;
