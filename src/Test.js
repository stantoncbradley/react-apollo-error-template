import React from 'react';
import { ApolloClient, ApolloProvider } from 'react-apollo';
import { networkInterface } from './graphql/networkInterface';
import LoggedIn from './LoggedIn';

class Test extends React.Component {
  constructor() {
    super();
    this.state = { loggedIn: false };
  }

  render() {
    if (!this.state.loggedIn) {
      return <button onClick={() => this.setState({loggedIn: true})}>Log in</button>
    }
    const client = new ApolloClient({ networkInterface });
    return (
      <ApolloProvider client={client}>
        <LoggedIn onLogOut={() => this.setState({loggedIn: false})} />
      </ApolloProvider>
    )
  }
}

export default Test;
