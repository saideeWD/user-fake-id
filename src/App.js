import './App.css';
import Gender from './components/Gender/Gender';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Nomatch from './components/Nomatch/Nomatch';
import UserDetail from './components/UserDetail/UserDetail';




function App() {
  return (
    <div className="App">

   <Router>
    <Routes>
      <Route path='/gender' element={<Gender/>}></Route>
      <Route exact path='/' element={<Gender/>}></Route>
      <Route path='/friend/:friendId' element={<UserDetail/>}></Route>
      <Route path='*' element={<Nomatch/>}></Route>
    </Routes>
   </Router>
      
      
       
     
    </div>
  );
}

export default App;
