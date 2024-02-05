import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import { Box } from '@mui/material';
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import ExerciceDetail from './pages/ExerciceDetail.jsx'

function App() {
    return (
    <Router>
    <Box >
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercice/:id" element={<ExerciceDetail/>}/>
        </Routes>
        </Box>
        </Router>
    );
}

export default App;