import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import BlogsPage from "./pages/Blogs/BlogsPage";
import Feature from "./pages/Feature/Feature";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/blog' component={BlogsPage} />
        <Route exact path='/features' component={Feature} />
      </Switch>
      {/* <input type='text' onChange={(e) => setQuery(e.target.value)} />
      <button onClick={search}>submit</button> */}
    </div>
  );
}

export default App;
