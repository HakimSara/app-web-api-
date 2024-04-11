
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './Components/NavBar';
import Container from './Components/Container';

import Home from './pages/Home'
import Livros from './pages/Livros'
import NovoLivro from './pages/NovoLivro'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/' element={<NavBar/>}>
              <Route index element={<Home/>}/>
              <Route path='/Livros' element={<Livros/>}/>
              <Route path='/NovoLivro' element={<NovoLivro/>}/>
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
