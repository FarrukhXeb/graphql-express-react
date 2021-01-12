require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");
const syncModels = require("./models");
const typeDefs = require("./typeDef");
const resolvers = require("./resolvers");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.use(
  "/grapqhl",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
syncModels().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
});
