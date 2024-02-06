import React from 'react'
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Sudip</h1>
            <p className={styles.description}>I'm a full-stack developer.</p>
            <a href='sudipr2024@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')} alt="pic" className={styles.heroImg} />
        <div className={styles.topBlur}/>    
        <div className={styles.bottomBlur}/> 
    </section>
  )
}
