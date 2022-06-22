import { makeStyles } from "@material-ui/core";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Alert from "./components/Alert";
import { lazy } from "react";
import { Suspense } from "react";
const HomePage = lazy(() => import("./Pages/HomePage"))
const CoinPage = lazy(() => import("./Pages/CoinPage"))

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App} id="crypt">
        <Header />
        <Suspense
        fallback={<div>Loading...</div>}
        >
        <Route path="/" component={HomePage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
        </Suspense>
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
