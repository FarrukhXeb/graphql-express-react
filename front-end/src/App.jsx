import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { lazy, Suspense } from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import useApollo from "./lib/apolloClient";
import AppRoute from "./Shared/AppRoute";
import AuthLayout from "./Shared/AuthLayout";
import MainLayout from "./Shared/MainLayout";
import FullscreenLoader from "./Shared/FullscreenLoader";
import AuthProvider from "./Context/AuthContext";
import PrivateRoute from "./Shared/PrivateRoute";

const Home = lazy(() => import("./Views/Home"));
const Login = lazy(() => import("./Views/Login"));
const Register = lazy(() => import("./Views/Register"));

function App() {
  const client = useApollo();
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <Suspense fallback={<FullscreenLoader />}>
            <Switch>
              <PrivateRoute
                exact
                path={"/"}
                layout={MainLayout}
                component={Home}
              />
              <AppRoute path={"/login"} layout={AuthLayout} component={Login} />
              <AppRoute
                path={"/register"}
                layout={AuthLayout}
                component={Register}
              />
            </Switch>
          </Suspense>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
