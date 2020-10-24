import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

import BookResolver from './resolvers/BookResolver';

async function start() {
  await createConnection();

  const schema = await buildSchema({ resolvers: [BookResolver] });

  const server = new ApolloServer({ schema });

  server.listen().then(({ url }) => console.log(`🔥 -> ${url}`));
}

start();
