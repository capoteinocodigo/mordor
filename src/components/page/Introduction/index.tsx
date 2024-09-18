import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

import Logo from '../../../../public/icons/logo.svg'
import { ButtonBackground } from '../../ButtonBackground'

export const Introduction = () => {
  return (
    <section className={styles.introduction} id="welcome">
      <div className={styles.container}>
        <Image
          src={Logo}
          alt="Logo da empresa escrito Mordor"
          className={styles.logo}
        />

        <div className={styles.content}>
          <h2>
            Bem-vindo à <span>Mordor</span>
          </h2>

          <p>
            Mordor é um estúdio de branding e experiência de marca. O que isso
            significa? Aqui, criamos não apenas sua marca, mas todo o universo
            visual e textual para que nossos clientes tenham a melhor experiência
            possível com a sua empresa através da sua marca.
          </p>

          <p>Na Mordor, criamos marcas icônicas para clientes únicos</p>

          <ButtonBackground buttonText={'Contate Agora'} />
        </div>
      </div>
    </section>
  )
}
