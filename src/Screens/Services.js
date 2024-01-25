import React from 'react'
import styles from './Services.module.css'

const Services = () => {
    return (
        <div name="Servicios" className={styles.services}>
            <div className={styles.content}>
                <h2>Desarrollo de paginas web</h2>
                <p>
                    Solucionamos los problemas de tu empresa con increíbles páginas web, creamos aplicaciones y
                    soluciones web a medida. Nos dedicamos a brindar soluciones de alta calidad y dentro del presupuesto
                    que se alinean con sus objetivos.
                </p>
            </div>
            <img alt="codigo" className={styles.imgContent} src={require('../Assets/img.jpg')} />
        </div>
    )
}

export default Services
