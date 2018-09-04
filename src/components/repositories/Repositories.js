import React from 'react';
import './Repositories.css'

const Repositories = (props) => {
  let repository;
  if (props.repos) {
    repository = props.repos.map((repo, index) =>
      <div className="col-sm-3 mt-4" key={index}>
        <a target="_blank" href={repo.url} className="repoLink">
          <div className="card repo-card">
            <div className="card-body">
              <div className="card-title">{repo.name}</div>
              <div className="card-text">{repo.description}</div>
              <span className="insights"><i className="fa fa-star">
              </i> {repo.stargazers.totalCount}
              </span>
              <span className="insights">
                <i className="fa fa-eye"></i> {repo.watchers.totalCount}
              </span>
            </div>
          </div>
        </a>
      </div>
    )
  } else {
    repository = ''
  }

  return (
    <div className="row">
      {repository}
    </div>
  )
}


export default Repositories;