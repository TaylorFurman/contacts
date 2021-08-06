import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



function App() {
  return (
    <AppBar position = 'relative'>
      <Toolbar>
      <CameraIcon/>
      <Typography variant='h6' color='inherit' noWrap>
        Hello App
      </Typography>

      </Toolbar>


    </AppBar>
    
  );
}

export default App;
