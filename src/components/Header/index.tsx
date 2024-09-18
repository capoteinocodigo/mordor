import React, { useState } from 'react'
import { ButtonBackground } from '../ButtonBackground'
import styles from './styles.module.scss'

import { Link } from 'react-scroll'

interface HeaderProps {
  isProjectPage?: boolean
}

export const Header = ({ isProjectPage = false }: HeaderProps) => {
  const [hiddenMenu, setHiddenMenu] = useState(false)

  function handleMenuButton() {
    setHiddenMenu(!hiddenMenu)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav>
          <button
            className={styles.menuButton}
            onClick={handleMenuButton}
            aria-label="Abrir menu"
          ></button>
          <ul className={hiddenMenu ? styles.active : styles.disabled}>
            <button
              className={styles.closeMenuButton}
              onClick={handleMenuButton}
              aria-label="Fechar menu"
            ></button>
            <li>
              {isProjectPage ? (
                <a href="/">Bem-vindo a Mordor</a>
              ) : (
                <Link
                  offset={0}
                  to="welcome"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  href="#welcome"
                  onClick={handleMenuButton}
                >
                  Bem-vindo a Mordor
                </Link>
              )}
            </li>

            <li>
              {isProjectPage ? (
                <a href="/">Serviço</a>
              ) : (
                <Link
                  offset={0}
                  to="service"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  href="#service"
                  onClick={handleMenuButton}
                >
                  Serviço
                </Link>
              )}
            </li>

            <li>
              {isProjectPage ? (
                <a href="/">Nossos casos</a>
              ) : (
                <Link
                  offset={0}
                  to="ourCase"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  href="#ourCase"
                  onClick={handleMenuButton}
                >
                  Nossos casos
                </Link>
              )}
            </li>

            <li>
              <Link
                offset={0}
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                href="#contact"
                onClick={handleMenuButton}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <ButtonBackground buttonText={'Contate Agora'} />
      </div>
    </header>
  )
}
