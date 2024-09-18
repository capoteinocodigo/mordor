import React from 'react'
import styles from './styles.module.scss'
export const ApplicationMaterials = () => {
  return (
    <section className={styles.applicationMaterials}>
      <h2>Materiais de aplicação</h2>

      <div className={styles.text}>
        <p>
          Desde papelaria até comunicação offline, todos os materiais criados
          para o lançamento da marca e massificação da identidade na mente do
          consumidor.
        </p>

        <p>
          Os materiais offline apresentam impressão pantone e laminações especiais
          para tornar a experiência do material ainda mais interessante.
        </p>
      </div>
    </section>
  )
}
