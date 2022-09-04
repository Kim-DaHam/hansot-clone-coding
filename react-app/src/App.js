import Home from './routes/Home.js'
import Menu from './routes/Menu.js'
import MenuView from './routes/MenuView.js'
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
