import { Route,Routes } from 'react-router-dom';
import './App.css';
import Frame from './Components/Frame';
// import Main from './Components/post';
// import Page from './Components/main';
import Login from './Components/login';
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Frame />} />
        <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
