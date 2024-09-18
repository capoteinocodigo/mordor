import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Header } from '../components/Header'

import styles from './project/styles.module.scss'

import ProjectPageTitle from '../../public/project/icons/projectPageTitle.svg'
import ProjectBanner from '../../public/project/globalsense/projectbanner.svg'

import LogoProject from '../../public/project/globalsense/globalsense-logo.svg'
import PatternProject from '../../public/project/globalsense/globalsense-pattern.svg'

import CardProject from '../../public/project/globalsense/globalsense-applications1.svg'
import BrindeProject from '../../public/project/globalsense/globalsense-applications2.svg'
import BookProject from '../../public/project/globalsense/globalsense-applications3.svg'
import BrindeProject4 from '../../public/project/globalsense/globalsense-applications4.svg'

import Decoration from '../../public/project/icons/starDecoration.svg'

import { AboutProjectBox } from '../components/page/Project/page/AboutProjectBox'
import { Footer } from '../components/Footer'

import { YoutubeSection } from '../components/page/Project/page/YoutubeSection/globalsense'

import { ApplicationMaterials } from '../components/page/Project/page/ApplicationMaterials'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import ColorImage from '../../public/project/globalsense/globalsense-cor.svg'

const Project = () => {
  return (
    <div className={styles.project}>
      <Head>
        <title>Mordor | Projeto</title>
      </Head>

      <Header isProjectPage={true} />

      <section className={styles.introduction}>
        <div className={styles.title}>
          <Image
            src={ProjectPageTitle}
            alt="Título da página escrito Mordor no meio e com duas nuvens nas pontas esquerda e direita"
          />
        </div>

        <div className={styles.banner}>
          <Image
            src={ProjectBanner}
            alt="Título da página escrito Mordor no meio e com duas nuvens nas pontas esquerda e direita"
          />
        </div>
      </section>

      <AboutProjectBox />

      <section className={styles.aboutProjectText}>
        <div className={styles.decoration}>
          <Image src={Decoration} alt="Ícone de uma estrela " />
        </div>

        <div className={styles.title}>
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <h2>
              Uma nova perfumaria brasileira:
              <br /> Global Sense
            </h2>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInRight">
            <p>Global Sense</p>
          </AnimationOnScroll>
        </div>

        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className={styles.text}>
            <p>
              Uma marca com o propósito de mudar vidas e proporcionar a
              possibilidade de crescimento financeiro, esta é a Global Sense.
            </p>
            <p>
              A mais nova perfumaria brasileira busca criar um ecossistema de
              consultores que vendem seus produtos e, assim, criar uma comunidade.
            </p>
            <p>
              A marca Global Sense usa como pilar conceitual a ideia de
              transformação em cadeia por meio das boas conexões que fazemos ao
              longo da vida. Além disso, a marca busca enfatizar o poder
              propagador de uma boa ideia, colocando o &quot;S&quot; do nome
              sendo criado por conexões e ao mesmo tempo sendo do centro.
            </p>
          </div>
        </AnimationOnScroll>
      </section>

      <YoutubeSection />

      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <div className={styles.projectLogo}>
          <Image src={LogoProject} alt="Logo da empresa" />
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp">
        <section className={styles.typographySection}>
          <h2>Cromática institucional e tipografia</h2>

          <div className={styles.text}>
            <p>
              A cromática institucional definida para a marca é uma variação
              de tons de verde com a adição de 70% e 65% de cinza para dar
              sobriedade e, ao mesmo tempo, um excelente contraste.
            </p>

            <p>
              A família tipográfica escolhida para a marca foi a
              Code Pro, uma opção refinada e moderna, com um estilo
              contemporâneo que transmite confiança e segurança, além de proporcionar
              uma boa aplicação para títulos e textos tanto online quanto offline.
            </p>
          </div>

          <Image
            src={ColorImage}
            alt="Imagem do guia de estilo utilizado no projeto"
          />
        </section>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInRight">
        <div className={styles.projectPattern}>
          <Image src={PatternProject} alt="Padrão da empresa" />
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp">
        <ApplicationMaterials />
      </AnimationOnScroll>

      <section className={styles.projectImages}>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <Image src={CardProject} alt="Cartão da empresa" />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInRight">
          <Image src={BrindeProject} alt="Brinde da empresa" />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <Image src={BookProject} alt="Livro da empresa" />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInRight">
          <Image src={BrindeProject4} alt="Brinde da empresa" />
        </AnimationOnScroll>
      </section>

      <Footer withBackground={true} />
    </div>
  )
}

export default Project
