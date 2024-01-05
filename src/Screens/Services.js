import React from 'react'
import styles from "./Services.module.css"

const Services = () => {
  return (
  <div name="Services" className={styles.services}>
      <p>We solve your company's problems by creating amazing web pages.</p>
      <img className={styles.imgContent} src={require("../Assets/codigo.webp")}/>
  </div>)
}

export default Services