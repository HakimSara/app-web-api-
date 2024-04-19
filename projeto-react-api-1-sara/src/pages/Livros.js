import { useLocation } from "react-router-dom";
import styles from "./Livro.module.css";
import Message from '../Components/message';
function Livros(){
    const location= useLocation();
    let message='';
    console.log ('LOCATION STATE: ' + location.state);
    if (location.state){
        message = location.state;
    }
    return(
        <section className={styles.livro_container}>
            <h1>Aqui vai ser listado seus livros</h1>
      
            {
             message && (
                 <Message
                       msg={message}
                         type='success'
                    />
                )
            }

          </section>
    )
}
export default Livros;