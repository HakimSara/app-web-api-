import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './NovoLivro.module.css';
import Input from '../Components/Form/input';
import Select from '../Components/Select/select';
function NovoLivro() {
  
  const [categories, setCategories] = useState([]);
  const [book, setBook] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'aplication/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data)
        console.log(data)
      })

      .catch((error) => {
        console.log(error)
      })
  }, [])

  function handlerChangeBook (event){
    
    setBook({...book, [event.target.name]: event.target.value});
    console.log(book)
  }
  function handlerChangeCategory (event){

    setBook({...book,category:{ 
      id: event.target.value,
      category: event.target.options[event.target.selectedIndex].text
    }});
  }
  function createBook(book){
    fetch('http://localhost:500/books',{
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json',
    },
    body:JSON.stringify(book)
  })
  .then(
    (resp=>resp.json())
  )
  .then(
    (data)=>{
      console.log(data);
      navigate('/Livros');
    }
  )
  .catch(
    (err)=>{console.log(err)}
  )
  }
  function submit(event){
    event.preventDefault();
    createBook(book);
  }
  return (
    <section className={styles.novolivros_container}>
      <h1>Cadastre livro</h1>

      <form onSubimit={submit}>
        <Input
          type="text"
          name="nome_livro"
          id="nome_livro"
          placeholder="Digite o titulo do livro"
          text="Digite o titulo do livro"
          handlerOnChange= {handlerChangeBook}
        />

        <Input
          type="text"
          name="nome_autor"
          id="nome_autor"
          placeholder="Digite o nome do autor"
          text="Digite o nome do autor"
          handlerOnChange= {handlerChangeBook}
        />

        <Input
          type="text"
          name="descricao_livro"
          id="descricao_livro"
          placeholder="Digite a descricao do livro"
          text="digite a descricao do livro"
          handlerOnChange= {handlerChangeBook}
        />

        <Select
          name="categoria-id"
          text="selecione a categoria do livro"
          options={categories}
          handlerOnChange={handlerChangeCategory}
        />

        <p>
          <button type="submit">Enviar</button>
        </p>
      </form>
    </section>
  )
}

export default NovoLivro;
