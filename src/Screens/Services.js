import React from 'react'
import styles from './Services.module.css'

const Services = () => {
    return (
        <div name="Services" className={styles.services}>
            <p>Solucionamos los problemas de tu empresa creando increíbles páginas web.</p>
            <img alt="codigo" className={styles.imgContent} src={require('../Assets/codigo.webp')} />
        </div>
    )
}

export default Services
