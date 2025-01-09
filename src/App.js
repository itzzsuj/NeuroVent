import './App.css'
import LandingPage from './landing/LandingPage';
import Login from './components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App(){
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App