import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/add">
          
        </Route>
        <Route path='/delete/:key'></Route>
      </Switch>
      <AppBar position = 'relative'>
      <Toolbar>
      <CameraIcon/>
      <Typography variant='h6' color='inherit' noWrap>
        Hello App
      </Typography>
      </Toolbar>
    </AppBar>

    </div>
    
    
  );
}

export default App;
