import React from 'react'
import styles from './Benefits.module.css'
import { BsFillDoorOpenFill } from 'react-icons/bs'
import { FaPeopleCarry } from 'react-icons/fa'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { AiOutlineSchedule } from 'react-icons/ai'
import { AiOutlineRise } from 'react-icons/ai'
import { FiRepeat } from 'react-icons/fi'

const Benefits = () => {
    return (
        <div name="Beneficios" className={styles.benefits}>
            <h2 className={styles.title}>Beneficios de tener un sitio web</h2>
            <p>
                Te abres al mundo <BsFillDoorOpenFill />
            </p>
            <p>
                Nuevos clientes <FaPeopleCarry />
            </p>
            <p>
                Costos mucho más bajos <FaMoneyBillAlt />
            </p>
            <p>
                Sin horarios <AiOutlineSchedule />
            </p>
            <p>
                Marketing mejorado <AiOutlineRise />
            </p>
            <p>
                Automatización y más rendimiento <FiRepeat />
            </p>
        </div>
    )
}

export default Benefits
