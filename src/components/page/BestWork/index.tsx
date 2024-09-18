import React from 'react'
import { BestWorkComponent } from '../../BestWorkComponent'
import styles from './styles.module.scss'

import bestWordImageOne from '../../../../public/images/hatImage.webp'

import bestWordImageTwo from '../../../../public/images/brandingImage.webp'

import bestWordImageThree from '../../../../public/images/agathon.svg'

export const BestWork = () => {
  return (
    <section className={styles.bestWork} id="ourCase">
      <div className={styles.container}>
        <h2>
          Alguns dos nossos <span>melhores trabalhos</span>
        </h2>

        <div className={styles.components}>
          <BestWorkComponent
            title={'Um novo desenvolvimento em Belo Horizonte'}
            titlename={'Brisas Pampulha'}
            image={bestWordImageOne}
            link={'/brisas'}
          />

          <BestWorkComponent
            title={'Uma nova perfumaria brasileira: Global Sense'}
            titlename={'Global Sense'}
            image={bestWordImageTwo}
            link={'/globalsense'}
            variant={'left'}
          />

          <BestWorkComponent
            title={'Uma nova marca para um grupo único no Brasil'}
            titlename={'Agathon Holding'}
            image={bestWordImageThree}
            link={'/agathon'}
          />
        </div>
      </div>
    </section>
  )
}
