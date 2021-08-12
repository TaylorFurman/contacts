import { Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';

import NavigationBar from './components/AppBar';
import AddContact from './components/AddContact';
import DeleteContact from './components/DeleteContact';
import store from './store.js'

const NoMatch = ({location}) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)

function App() {
  return (
    <div>
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
          <NavigationBar/>
          </Route>
          <Route path="/add">
          <NavigationBar/>
            <AddContact/>
          </Route>
          <Route path='/delete/:key'>
          <NavigationBar/>
            <DeleteContact/>
          </Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
