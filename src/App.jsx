
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import { Box } from '@mui/material';
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ExerciceDetail from './pages/ExerciceDetail.jsx'

function App() {
    return (
    <Router>
    <Box sx={{width:{xl:'1448px'}}} m="auto" >
        <NavBar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExerciceDetail />} />
        </Routes>
        <Footer/>
        </Box>
        </Router>
    );
}

export default App;