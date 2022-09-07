import {Home, Menu, MenuView} from './routes/index.js'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/menu/menu_view" element={<MenuView/>} />
      </Routes>
    </div>
  );
}

export default App;
