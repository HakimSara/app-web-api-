import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import Livro from"./pages/Livros";
import NovoLivro from "./pages/NovoLivro";
import Container from "./Components/Container";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}/>
        <Route index element={<Home/>}/>
        <Route path='/Livros' element={<Livro/>}/>
        <Route path='/NovoLivro' element={<NovoLivro/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
import NavBar from './Components/NavBar';

export default App;
