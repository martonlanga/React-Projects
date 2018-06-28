const {GraphQLServer} = require('graphql-yoga');
const {Prisma} = require('prisma-binding');

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: (root, args, context, info) => {
      return context.db.query.links({}, info);
    },
  },

  Mutation: {
    post: (root, args, context, info) => {
      return conext.db.mutation.createLink({
        data: {
          url: args.url,
          description: args.description
        },
      }, info);
    }
  },

  Link: {
    id: (root) => root.id,
    description: (root) => root.description,
    url: (root) => root.url
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => Object.assign({}, req, {db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://eu1.prisma.sh/' +
                'public-glacierseer-740/hackernews-node/dev',
      secret: 'mysecret123',
      debug: true})})
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
