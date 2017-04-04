import React from 'react';
import { gql, graphql } from 'react-apollo';

class LoggedIn extends React.Component {
  render() {
    const { data: { loading, people } } = this.props;
    return (
      <div>
        <button onClick={this.props.onLogOut}>Log out</button>
        {loading ? (
          <p>Loading…</p>
        ) : (
          <ul>
            {people.map(person => (
              <li key={person.id}>
                {person.name} {person.time}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default graphql(
  gql`{
    people {
      id
      name
      time
    }
  }`,
)(LoggedIn)
