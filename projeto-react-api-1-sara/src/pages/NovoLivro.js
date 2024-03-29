
import Styles from "./NovoLivro.module.css";
import Input from "../Components/Form/input";
function NovoLivro(){
    return(
        <section className={Styles.NovoLivro}> 
        <h1>Cadastro de livro </h1>
        <form>
          {/* <p>
                <input type='text' placeholder='Nome do livro'/>
            </p>

            <p>
                <input type='text' placeholder='Nome do Autor'/>
            </p>

            <p>
                <input type='text' placeholder='Descrição do livro'/>
            </p>

            <p>
                <input type='submit' value='Cadastrar livro'/>
    </p>*/}
    <Input
    type='text'
    name='nome_livro'
    id= 'Digite o nome do Livro'
    placeholder='Digite uma descrição para o livro'
    text=''

    />
        </form>
        
        </section>
    )
}
export default NovoLivro;