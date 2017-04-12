import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

const cursorStyle = {
  fontSize: '9px',
  fontFamily: 'monospace',
};

class People extends Component {
  render() {
    const { data: { loading, people } } = this.props;
    return loading ? (
      <p>Loading…</p>
    ) : (
      <ul>
        {people.edges.map(edge => (
          <li key={edge.node.id}>
            {edge.node.name} <small style={cursorStyle}>{edge.cursor}</small>
          </li>
        ))}
      </ul>
    );
  }
}

export default graphql(gql`
  query People($first:Int, $after:String $last:Int, $before:String) {
    people(first:$first after:$after last:$last before:$before) {
      edges {
        cursor
        node {
          id
          name
        }
      }
    }
  }
`)(People)
