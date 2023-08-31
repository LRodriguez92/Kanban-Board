import './App.css';
import Boards from './components/Boards';
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Nav />
      <Container sx={{mt: "85px"}}>
        <Routes>
          <Route path="/" element={<Boards/>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
