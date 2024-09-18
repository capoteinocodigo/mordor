import React from 'react'
import styles from './styles.module.scss'

import Decoration from '../../../../../../public/icons/separatorCopyright.svg'
import Image from 'next/image'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export const AboutProjectBox = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp">
      <section className={styles.aboutProject}>
        <div className={styles.aboutTextBox}>
          <div className={styles.title}>
            <h3>
              <span>Vamos falar sobre</span> Brisas Pampulha{' '}
            </h3>
          </div>

          <div className={styles.infos}>
            <div className={styles.info}>
              <p>O que foi feito</p>

              <span>
                Branding <br /> Motion <br /> Design gráfico
              </span>
            </div>

            <div className={styles.info}>
              <p>Prêmios e Indicações</p>

              <span>
                Brazil Design <br /> Awards <br /> Europe Awards <br /> Design
                design
              </span>
            </div>

            <div className={styles.info}>
              <p>Data de criação</p>

              <span>
                Abril, 2022 <br /> Mordor Design
              </span>
            </div>
          </div>

          <div className={styles.footer}>
            <p>Todos os direitos reservados para </p>

            <Image src={Decoration} alt="Decoração" />
            <p>Mordor Design e experiência </p>
          </div>
        </div>
      </section>
    </AnimationOnScroll>
  )
}
