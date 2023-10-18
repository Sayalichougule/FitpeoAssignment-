import logo from './logo.svg';
import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Product from './Pages/Product';
import Sidebar from './component/Sidebar';
import Income from "./Pages/Income";
import Promote from "./Pages/Promote";
import Help from "./Pages/Help";

function App() {
  return (

 <>
 
    <Routes>
   
    <Route path='/dashboard' element={ <Dashboard/>} />
    <Route path='/product' element={<Product/>}/>
    <Route path='/income' element={<Income/>}/>
    <Route path='/promote' element={<Promote/>}/>
    <Route path='/help' element={<Help/>}/>
   
   
   
   
  </Routes>

  </>
  );
}

export default App;
