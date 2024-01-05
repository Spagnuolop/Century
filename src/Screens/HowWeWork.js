import React from 'react'
import styles from './HowWeWork.module.css'
import Step from '../Components/Step'

const HowWeWork = () => {
    const steps = [
        {
            id: 1,
            text: 'You tell us your proposal.',
        },
        {
            id: 2,
            text: 'We design your site and do a review.',
        },
        {
            id: 3,
            text: 'We develop your website.',
        },
        {
            id: 4,
            text: 'We deploy your website.',
        },
        {
            id: 5,
            text: 'You enjoy all the benefits of having a website for your company.',
        },
    ]

    return (
        <div name="HowWeWork" className={styles.howWork}>
            <h2 className={styles.title}>How We Work</h2>
            {steps.map((x, idx) => (
                <Step text={x.text} step={x.id} key={idx} />
            ))}
        </div>
    )
}

export default HowWeWork
