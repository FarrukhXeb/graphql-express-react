import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import useApollo from "./lib/apolloClient";
import AppRoute from "./Shared/AppRoute";
import AuthLayout from "./Shared/AuthLayout";
import MainLayout from "./Shared/MainLayout";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Register from "./Views/Register";

function App() {
  const client = useApollo();
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <AppRoute exact path={"/"} layout={MainLayout} component={Home} />
          <AppRoute path={"/login"} layout={AuthLayout} component={Login} />
          <AppRoute
            path={"/register"}
            layout={AuthLayout}
            component={Register}
          />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
