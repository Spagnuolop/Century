import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-scroll'
import video from '../Assets/homeVideo.mp4'

const Home = () => {
    return (
        <div name="Inicio" className={styles.home}>
            <div className={styles.videoContainer}></div>
            <video src={video} autoPlay loop muted />
            <div className={styles.titleContainer}>
                <div className={styles.title1}>
                    <p>
                        Expande tu <br />
                        <b>Negocio</b>
                    </p>
                </div>
                <div className={styles.title2}>
                    <p>
                        Con la mejor <br />
                        <b>Presencia online</b>
                    </p>
                </div>
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
