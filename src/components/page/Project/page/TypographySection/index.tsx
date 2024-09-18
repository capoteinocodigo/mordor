import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

import ColorImage from '../../../../../../public/project/images/brisascor.webp'

export const TypographySection = () => {
  return (
    <section className={styles.typographySection}>
      <h2>Cromática institucional e tipografia</h2>

      <div className={styles.text}>
        <p>
          A cor institucional definida para a marca é misturada com tons vibrantes
          de verde, laranja e bordô. As cores foram projetadas para transmitir
          energia e vivacidade, valores intrínsecos à marca. Além disso, uma
          paleta de cores auxiliar foi projetada para cada submarca de arquitetura.
        </p>

        <p>
          A família tipográfica escolhida para a marca foi a Code Pro, uma opção
          refinada e moderna, com um estilo contemporâneo que transmite confiança
          e segurança, além de proporcionar uma boa aplicação para títulos e textos
          tanto online quanto offline.
        </p>
      </div>

      <Image
        src={ColorImage}
        alt="Imagem do guia de estilo utilizado no projeto"
      />
    </section>
  )
}
