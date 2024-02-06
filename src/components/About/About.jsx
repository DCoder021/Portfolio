import React from 'react';

import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage.png")} 
                alt="Me thinking about life" 
                className={styles.aboutImage}
                />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={
                        getImageUrl("about/cursorIcon.png")
                    } alt="Cursor" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={
                        getImageUrl("about/serverIcon.png")
                    } alt="server" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I'm a frontend developer</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={
                        getImageUrl("about/uiIcon.png")
                    } alt="Cursor" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have multiple landing pages</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
