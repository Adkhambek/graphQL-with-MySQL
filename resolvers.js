const fetchAll = require("./mysql/connection");
const query = require("./query");

const resolvers = {
  Query: {
    users: async () => {
      const users = await fetchAll(query.allUsers);
      return users;
    },
    posts: async (_, { userId }) => {
      const posts = await fetchAll(query.allPosts);
      return posts.filter((values) => values.auth_id == userId);
    }, // 4chi vodedan boshlab
  },
  Posts: {
    author: (post) => post.username,
    userId: (post) => post.auth_id,
    comments: async (post) => {
      const comments = await fetchAll(query.comments, post.id);
      return comments.filter((value) => value.post_id == post.id);
    },
  },
  Mutation: {
    addUser: (_, arg) => {
      console.log(arg);
    },
  },
};

module.exports = resolvers;
