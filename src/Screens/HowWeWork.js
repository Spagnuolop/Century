import React from 'react'
import styles from './HowWeWork.module.css'
import Step from '../Components/Step'

const HowWeWork = () => {
    const steps = [
        {
            id: 1,
            text: 'Cuéntanos tu propuesta.',
        },
        {
            id: 2,
            text: 'Diseñamos tu sitio y hacemos una revisión.',
        },
        {
            id: 3,
            text: 'Desarrollamos tu sitio web.',
        },
        {
            id: 4,
            text: 'Implementamos tu sitio web.',
        },
        {
            id: 5,
            text: 'Disfrutas de todos los beneficios de tener un sitio web para tu empresa.',
        },
    ]

    return (
        <div name="ComoTrabajamos" className={styles.howWork}>
            <h2 className={styles.title}>Como Trabajamos</h2>
            {steps.map((x, idx) => (
                <Step text={x.text} step={x.id} key={idx} />
            ))}
        </div>
    )
}

export default HowWeWork
