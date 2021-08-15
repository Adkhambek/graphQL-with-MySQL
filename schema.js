const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [Users!]!
    posts(userId: Int!): [Posts!]!
  }

  type Users {
    id: Int!
    username: String!
    contact: String!
    age: Int!
    date: String!
  }
  type Posts {
    id: Int!
    title: String!
    post: String!
    userId: Int!
    author: String!
    date: String!
    comments: [Comments!]!
  }
  type Comments {
    id: Int!
    comment: String!
    username: String!
    postId: Int!
    date: String!
  }
  type Mutation {
    addUser(username: String, contact: String, age: Int): Users
  }
`;

module.exports = typeDefs;
