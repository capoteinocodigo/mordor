import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Header } from '../components/Header'

import styles from './project/styles.module.scss'

import ProjectPageTitle from '../../public/project/icons/projectPageTitle.svg'
import ProjectBanner from '../../public/project/agathon/projectbanner.png'

import LogoProject from '../../public/project/agathon/agathon-logo.svg'
import PatternProject from '../../public/project/agathon/agathon-pattern.jpg'

import CardProject from '../../public/project/agathon/agathon-applications1.jpg'
import BrindeProject from '../../public/project/agathon/agathon-applications2.jpg'
import BookProject from '../../public/project/agathon/agathon-applications3.jpg'
import BrindeProject4 from '../../public/project/agathon/agathon-applications4.jpg'

import Decoration from '../../public/project/icons/starDecoration.svg'

import { AboutProjectBox } from '../components/page/Project/page/AboutProjectBox'
import { Footer } from '../components/Footer'

import { YoutubeSection } from '../components/page/Project/page/YoutubeSection/agathon'

import { ApplicationMaterials } from '../components/page/Project/page/ApplicationMaterials'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import ColorImage from '../../public/project/agathon/agathon-cor.jpg'

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
              Uma nova marca para um
              <br /> grupo único no Brasil
            </h2>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInRight">
            <p>Agathon Holding</p>
          </AnimationOnScroll>
        </div>

        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className={styles.text}>
            <p>
              Uma holding é muito mais do que a empresa-chave que reúne os outros
              empreendimentos; é o elo intelectual e sinérgico de força.
            </p>
            <p>
              É a empresa que concentra a visão e a gestão dos propósitos latentes
              de cada empreendimento.
            </p>
            <p>
              As colunas jônicas dos templos gregos foram usadas para criar a marca.
              A ordem jônica era caracterizada pela elegância e robustez de seus
              ornamentos e colunas. Além disso, o próprio conceito de colunas está
              presente na marca, como uma unidade de suporte e segurança, criando
              uma conexão ainda mais estreita com os valores e objetivos da empresa.
            </p>
            <p>
              Como forma principal, ainda é possível ver a letra &quot; T &quot; na
              construção das colunas, pois é a letra central do nome.
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
              A cor institucional definida para a marca é misturada com
              tons vibrantes de verde, laranja e bordô. As cores foram
              projetadas para transmitir energia e vivacidade, valores intrínsecos
              à marca. Além disso, uma paleta de cores auxiliar foi projetada
              para cada submarca de arquitetura.
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
