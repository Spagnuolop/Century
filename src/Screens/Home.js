import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name="Home" className={styles.home}>
            <div className={styles.titleContainer}>
                <p>
                    Expande tu <br />
                    <b>Negocio</b>
                </p>
                <p>
                    Con la mejor <br />
                    <b>Presencia online</b>
                </p>
            </div>
            <div className={styles.buttonsContainer}>
                <Link to="Contact" smooth duration={500} className={styles.callToAction}>
                    Ponerse en Contacto
                </Link>
                <Link to="Contact" smooth duration={500} className={styles.callToAction}>
                    Obtener Cotización
                </Link>
            </div>
        </div>
    )
}

export default Home
