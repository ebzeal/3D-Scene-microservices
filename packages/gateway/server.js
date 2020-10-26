import express from 'express';
import env from 'dotenv';
import { ApolloServer, gql } from 'apollo-server-express';
import cors from 'cors';
import fs from 'fs';
import resolvers from './src/graphql/resolvers';
// import routes from './api/routes';

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

env.config();

const port = process.env.PORT || 5000;

const typeDefs = gql(fs.readFileSync('./src/graphql/schema.graphql', { encoding: 'utf8' }));

// const context = ({ req }) => ({ user: req.user && db.users.get(req.user.sub) });
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: '/graphql' });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
