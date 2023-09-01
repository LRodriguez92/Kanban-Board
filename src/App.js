import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import { Container } from '@mui/material';
import Boards from './components/Boards';
import Nav from './components/Nav';
import ShowBoard from './components/ShowBoard';

function App() {
  return (
    <div className="App">
      <Nav />
      <Container maxWidth="xl" sx={{pt: "150px"}}>
        <Routes>
          {/* Redirect home route to /boards route */}
          <Route path="/" element={<Navigate to="/boards"/>}/>
          <Route path="/boards" element={<Boards/>} />
          <Route path="/boards/:id" element={<ShowBoard />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
