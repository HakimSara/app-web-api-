import styles from "./Home.module.css"
function Home(){
    return(
        <section className={styles.home_container}>
        <h1>
        Home <span>Libri</span>
        </h1>
        <p>Comece a gerenciar seus livros</p>
        </section>

    )
}
export default Home;