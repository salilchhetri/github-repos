import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      isDisabled: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const re = /[0-9a-fA-F]+/g;
    if (re.test(event.key)) {
      event.preventDefault();
    }
    this.setState({ user: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setCurrentUser(this.state.user)
  }

  componentDidMount() {
    this.usernameInput.focus();
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-4 offset-sm-4 mt-5">
          <div className="card">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="user" name="user">Github username</label>
                  <input
                    className="form-control"
                    value={this.state.value}
                    onChange={this.handleChange}
                    ref={(input) => { this.usernameInput = input; }}
                  />
                </div>
                <button type="submit" className="btn btn-outline-primary" disabled={!this.state.user}>Fetch Repositories</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form;
