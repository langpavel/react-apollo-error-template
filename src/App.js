import React, { Component } from 'react';
import People from './People';

class App extends Component {
  state = {
    first: "2",
    after: '',
  };

  handleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { first, after } = this.state;
    return (
      <main>
        <header>
          <h1>Apollo Client Error Template</h1>
          <p>
            This is a template that you can use to demonstrate an error in Apollo Client.
            Edit the source code and watch your browser window reload with the changes.
          </p>
          <p>
            The code which renders this component lives in <code>./src/App.js</code>.
          </p>
          <p>
            The GraphQL schema is in <code>./src/graphql/schema</code>.
            Currently the schema just serves a list of people with names and ids.
          </p>
          <input name="first" type="number" value={first} onChange={this.handleChange} />
          <input name="after" type="text" value={after} onChange={this.handleChange} />
        </header>
        <section>
          <h2>People</h2>
          <People first={parseInt(first, 10)} after={after || null} />
        </section>
        <section>
          <h2>All People</h2>
          <People />
        </section>
      </main>
    );
  }
}

export default App
