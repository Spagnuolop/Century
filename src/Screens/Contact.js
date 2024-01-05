import React from 'react'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <div name="Contact" className={styles.contact}>
      <h2>Contact</h2>
      <form className={styles.form} method="POST" action="https://getform.io/f/c0515501-70b9-419e-b216-9a7baaf5c484">
        <label for="Name">Name</label>
        <input id="Name" name="Name" className={styles.input}></input>
        <label for="Email">Email</label>
        <input id="Email" name="Email" type="Email" className={styles.input}></input>
        <label for="Message">Message</label>
        <textarea id="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact