import styles from "./Home.module.css"
function Home(){
    return(
        <section className={styles.home_container}>
        <h1>Bem vindo ao web app <span>Libri</span> </h1>
        <p> Comece a gerenciar seus livros agr mesmo</p>
        </section>
    )
}
export default Home;