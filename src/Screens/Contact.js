import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <div name="Contact" className={styles.contact}>
            <h2>Contacto</h2>
            <form
                className={styles.form}
                method="POST"
                action="https://getform.io/f/c0515501-70b9-419e-b216-9a7baaf5c484"
            >
                <label>Nombre</label>
                <input id="Name" name="Name" className={styles.input}></input>
                <label>Correo</label>
                <input id="Email" name="Email" type="Email" className={styles.input}></input>
                <label>Mensaje</label>
                <textarea id="Message" name="Message"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contact
