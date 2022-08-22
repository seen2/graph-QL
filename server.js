import { ApolloServer,gql } from 'apollo-server';

import {ApolloServerPluginLandingPageLocalDefault} from'apollo-server-core';

//Scalar Types: (String,Int,Float,Boolean) or null
//to  avoid null use(!) like String!

const typeDefs = gql`
  type Query {
    hello: String,
    numberOfAnimals:Int!,
    price:Float,
    isCool:Boolean
  }
`

const resolvers = {
  Query: {
    hello: () => "World",
    numberOfAnimals:()=>null,
    price:()=>201.33,
    isCool:()=>false
  },
};




const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  /**
   * What's up with this embed: true option?
   * These are our recommended settings for using AS;
   * they aren't the defaults in AS3 for backwards-compatibility reasons but
   * will be the defaults in AS4. For production environments, use
   * ApolloServerPluginLandingPageProductionDefault instead.
  **/
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});

server.listen().then(({ url }) => {
  console.log("Server is up at " + url);
});