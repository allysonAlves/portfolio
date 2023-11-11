import React, { useEffect } from 'react'
import styles from './Sobre.module.css'
import Foto from './../../assets/eufoto1.png'
import { TypeAnimation } from 'react-type-animation';
import  $  from 'jquery'
import { TextareaAutosize } from '@mui/material';

const QuemSou = () => {
  const textPt = 'sou Allyson Alves, estudante de Análise e Desenvolvimento de Sistemas pela faculdade Estácio de Sá, tenho habilidades em desenvolvimento web e mobile, sou estagiário React / .Net na empresa Target Work, também atuo desenvolvendo sistemas e assets para a plataforma Unity Asset Store, atualmente com 3 assets publicados.'
 
  return (
    <section id='quemsou' className={styles.div_quemsou}>
        <div className={styles.sobre}>
          <img id='myphoto' className={styles.image} src={Foto}/>
          <div className={styles.div_text}>            
              <p className={styles.text_orange}>
                  Olá,
              </p>
              <p className={styles.texto}>
                {textPt}
                {/* <TypeAnimation
                  sequence={[
                    textPt,
                    50,
                    "texto em inglês",
                    50,                  
                  ]}
                  speed={50}
                  // repeat={Infinity}
                  // style={{ fontSize: '2em' }}
                />              */}
              </p>          
          </div>          
        </div>
      </section>
  )
}

export default QuemSou