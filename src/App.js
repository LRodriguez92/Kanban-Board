import './App.css';
import Boards from './components/Boards';
import Nav from './components/Nav';
import {Routes, Route, Navigate} from 'react-router-dom';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Nav />
      <Container sx={{pt: "150px"}}>
        <Routes>
          {/* Redirect home route to /boards route */}
          <Route path="/" element={<Navigate to="/boards"/>}/>
          <Route path="/boards" element={<Boards/>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
