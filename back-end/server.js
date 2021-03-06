const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");
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
  "/graphql",
  graphqlHTTP({
    schema,
    customFormatErrorFn: (err) => {
      console.log(err.message);
      return err.message;
    },
    graphiql: true,
  })
);
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
