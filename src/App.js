import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './components/Home';
import Header from './components/Header';
import Navbar from './components/Navbar';
import PortfolioCard from './components/PortfolioCard';
import StockCard from './components/StockCard';
import StockList from './components/StockList';
import PortfolioContainer from './containers/PortfolioContainer';
import PortfolioForm from './components/PortfolioForm';
import StockForm from './components/StockForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <Switch>
          <Route path="/portfolios/new">
            <PortfolioForm />
          </Route>
          <Route path="/portfolios/:id">
            <PortfolioCard />
          </Route>
          <Route path="/portfolios">
            <PortfolioContainer />
          </Route>
          <Route path="/stocks/new">
            <StockForm />
          </Route>
          <Route path="/stocks/:id">
            <StockCard />
          </Route>
          <Route path="/stocks">
            <StockList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
