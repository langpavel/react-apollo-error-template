import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
} from 'graphql-relay';

const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  },
});

const { connectionType: PersonConnection } = connectionDefinitions({ nodeType: PersonType });

const peopleData = [
  { id: 1, name: 'John Smith' },
  { id: 2, name: 'Sara Smith' },
  { id: 3, name: 'Budd Deey' },
  { id: 4, name: 'Albert Einstein' },
  { id: 5, name: 'Pierre-Simon Laplace' },
  { id: 6, name: 'Paul Adrien Maurice Dirac' },
  { id: 7, name: 'Pierre de Fermat' },
  { id: 8, name: 'Leonhard Euler' },
  { id: 9, name: 'Alan Turing' },
  { id: 10, name: 'John Ronald Reuel Tolkien' },
  { id: 11, name: 'Edgar Allan Poe' },
  { id: 12, name: 'William Blake' },
];

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    people: {
      args: connectionArgs,
      type: PersonConnection,
      resolve: (faction, args) => connectionFromArray(
        peopleData,
        args
      ),
    },
  },
});

export const schema = new GraphQLSchema({ query: QueryType });
