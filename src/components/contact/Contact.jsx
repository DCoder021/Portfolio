import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt='email icon' />
                <a href="mailto:sudipr2024@gmail.com">sudipr2024@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt='linkedin icon' />
                <a href="https://www.linkedin.com/in/sudip-rakshit-a87b061b8/">LinkedIn</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt='github icon' />
                <a href="https://github.com/DCoder021">Github</a>
            </li>
        </ul>
    </footer>
  )
}
