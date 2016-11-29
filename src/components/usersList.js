import { connect } from 'react-redux';
import React, { Component } from 'react';

import * as actions from '../actions';


class UsersList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
      <li className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">Team</p>
        <a className="btn btn-primary">E-mail</a>
      </li>
    );
  }

  render() {
    return (
      <ul>
        {this.props.users.map(this.renderUser)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, actions)(UsersList);
