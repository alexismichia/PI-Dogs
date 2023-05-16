import './App.css';
import { Route } from 'react-router-dom'
import { BrowserRouter, Switch } from 'react-router-dom';
import Detail from './components/Detail';
import CreateDogForm from './components/CreateDogForm'
import HomePage from './components/HomePage'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/form" component={CreateDogForm} />
          <Route exact path="/form/:id" component={CreateDogForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;







