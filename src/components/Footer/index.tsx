import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

import Decoration from '../../../public/icons/separatorCopyright.svg'
import { AnimationOnScroll } from 'react-animation-on-scroll'

interface FooterProps {
  withBackground?: boolean
}

export const Footer = ({ withBackground = false }: FooterProps) => {
  return (
    <footer
      className={withBackground ? styles.footerBackground : styles.footer}
      id="contact"
    >
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className={styles.container}>
          <div className={styles.titleBox}>
            <h2>
              <span>Vamos falar sobre</span> sua nova marca
            </h2>
          </div>

          <div className={styles.content}>
            <div className={styles.agency}>
              <h3>Agência</h3>

              <p>Rua havai 733, Sumaré</p>
            </div>

            <div className={styles.phone}>
              <h3>Telefone</h3>

              <p>+61 98167-3867</p>
            </div>

            <div className={styles.email}>
              <h3>Email</h3>

              <p>contato@mordor.digital</p>
            </div>
          </div>

          <div className={styles.copyright}>
            <p>Todos os direitos reservados para</p>

            <Image src={Decoration} alt="Decoração" />

            <p>Mordor Design e experiência</p>
          </div>
        </div>
      </AnimationOnScroll>
    </footer>
  )
}
