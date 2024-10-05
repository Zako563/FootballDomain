import Players from "./pages/Players";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Teams from "./pages/Teams";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import PlayerTeamList from "./components/PlayerTeamList";
import TeamPlayerList from "./components/TeamPlayerList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer/>
    
    <Router>
     
    <NavBar/> 
    <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path ="/players" element={<Players/>} />
        <Route path ="/teams" element={<Teams/>}/>
        <Route path="/playerteam" element={<PlayerTeamList/>}/>
        <Route path="/teamplayer" element ={<TeamPlayerList/>}/>
    </Routes>
   </Router>
   </>

  );
}

export default App;
