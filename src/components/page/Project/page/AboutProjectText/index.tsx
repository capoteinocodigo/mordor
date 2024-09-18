import React from 'react'
import styles from './styles.module.scss'

import CiteDecoration from '../../../../../../public/project/icons/quotationMarksIcon.svg'

import Decoration from '../../../../../../public/project/icons/starDecoration.svg'

import Image from 'next/image'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export const AboutProjectText = () => {
  return (
    <section className={styles.aboutProjectText}>
      <div className={styles.decoration}>
        <Image src={Decoration} alt="Ícone de uma estrela " />
      </div>

      <div className={styles.title}>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <h2>
            Um novo empreendimento <br /> em Belo Horizonte
          </h2>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInRight">
          <p>Brisas Pampulha</p>
        </AnimationOnScroll>
      </div>

      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <div className={styles.text}>
          <p>
            Um novo empreendimento no coração de Belo Horizonte com a proposta de
            viver com qualidade de vida, uma experiência sublime que reunirá o melhor
            da arquitetura com a proximidade da natureza, isso é o Brisas Pampulha.
          </p>

          <p>
            O grande desafio na criação da marca Brisas foi reunir em um único símbolo
            a ideia de leveza, modernidade e refinamento, além de construir um universo
            visual que fosse expansivo o suficiente para atuar em diversas frentes.
          </p>
        </div>
      </AnimationOnScroll>

      <div className={styles.cite}>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <Image src={CiteDecoration} alt="Ícone de aspas" />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInRight">
          <div>
            <h3>
              Concordo em ir para um lugar onde o único som é a brisa e a paz do seu toque na pele
            </h3>

            <span>Luis Fonseca</span>
          </div>
        </AnimationOnScroll>
      </div>

      <AnimationOnScroll animateIn="animate__fadeInUp">
        <p>
          A marca Brisas busca retratar de forma iconográfica o significado literal
          da palavra, como um movimento suave do vento que atinge as mais variadas
          superfícies em um processo cíclico interminável. Ao mesmo tempo, a marca
          trabalha em um nível mais afetivo, retratando a leveza e a boa sensação
          descrita pelo poeta Luis Fonseca. Ainda assim, vale destacar que o símbolo
          ainda retrata a primeira letra do nome, a letra &rdquo;B&rdquo; na criação
          do símbolo.
        </p>
      </AnimationOnScroll>
    </section>
  )
}
