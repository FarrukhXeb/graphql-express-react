import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/login"} component={Login} />
          <Route path={"/register"} component={Register} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
