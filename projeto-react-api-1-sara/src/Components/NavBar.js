
import { Outlet,link } from "react-router-dom";
import Container from "./Container";
import styles from "./NavBar.modules"
function NavBar(){
    return(
        <>
        <Container><ul className={styles.list}>
            <li className={styles.iten}>
                <link to='/'>Home</link>
            </li>
           <li className={styles.itens}>
           <link to='/Livros'>Livros</link>
           </li>
            <li className={styles.itens}>
            <link to='/NovoLivro'>Cadastrar livro</link>
            </li>
        </ul> </Container>
        
        </>
    )
}
export default NavBar;