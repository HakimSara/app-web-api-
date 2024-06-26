
import { Outlet, Link } from "react-router-dom";
import Container from "./Container";
import styles from "./NavBar.module.css"
function NavBar() {
    return(
        <div>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/livros'>Livros</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/novolivro'>Cadastrar Livro</Link>
                    </li>
                    <li className={styles.item}>

                    </li>
                </ul>
            </Container>
            <Outlet/>
        </div>
    )
}
export default NavBar;
