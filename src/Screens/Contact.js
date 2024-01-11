import React, { useState } from 'react'
import styles from './Contact.module.css'
import axios from 'axios'
import Swal from 'sweetalert2'

const Contact = () => {
    const [data, setData] = useState({
        Name: '',
        Email: '',
        Message: '',
    })
    const [isSending, setIsSending] = useState(false)
    const handleSubmit = async (e) => {
        // fetch('https://getform.io/f/c0515501-70b9-419e-b216-9a7baaf5c484', { method: 'POST', body: data })
        e.preventDefault()
        setIsSending(true)
        const result = await axios.post('https://getform.io/f/c0515501-70b9-419e-b216-9a7baaf5c484', data)
        setIsSending(false)
        if (result.status === 200) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer
                    toast.onmouseleave = Swal.resumeTimer
                },
            })
            Toast.fire({
                icon: 'success',
                title: 'Mensaje Enviado con Exito',
            })
            setData({
                Name: '',
                Email: '',
                Message: '',
            })
        }
    }

    const handleInput = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }
    return (
        <div name="Contact" className={styles.contact}>
            <h2>Contacto</h2>
            <form className={styles.form}>
                <label>Nombre</label>
                <input
                    id="Name"
                    name="Name"
                    value={data.Name}
                    onChange={(event) => handleInput(event)}
                    className={styles.input}
                ></input>
                <label>Correo</label>
                <input
                    id="Email"
                    value={data.Email}
                    name="Email"
                    onChange={(event) => handleInput(event)}
                    type="Email"
                    className={styles.input}
                ></input>
                <label>Mensaje</label>
                <textarea
                    id="Message"
                    value={data.Message}
                    onChange={(event) => handleInput(event)}
                    name="Message"
                ></textarea>
                <button onClick={(e) => handleSubmit(e)}>{isSending ? 'Enviando' : 'Enviar'}</button>
            </form>
        </div>
    )
}

export default Contact
