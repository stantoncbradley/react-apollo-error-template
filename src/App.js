import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import Test from './Test';

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <h1>Store not clearing/refetching when unmounted/remounted</h1>
          <p>
            We need to reset our cache when the user logs out
          </p>
          <p>
            Currently the data isn't cleared when the user logs out.
          </p>
          <p>
            resetStore doesn't work because our server returns a 404 when user id is not included in request.
          </p>
        </header>
        <Test />
      </main>
    );
  }
}

export default App;
