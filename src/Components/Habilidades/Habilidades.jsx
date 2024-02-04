import React from 'react'

import styles from './Habilidades.module.css'

const Habilidades = () => {
  return (
    <div>
      <div className={styles.div_habilidades}>
            <div className={styles.item} title='React'>
              <img src='images/icons/icon-react.png' rel='React'/>
              <p>React</p>
            </div>
            <div className={styles.item} title='Javascript'>
              <img src='images/icons/icon-javascript.png' rel='Javascript'/>
              <p>JavaScript</p>
            </div>
            <div className={styles.item} title='C#'>
              <img src='images/icons/icon-c.png'/>
              <p>C#</p>
            </div>
            <div className={styles.item} title='DotNet'>
              <img src='images/icons/dotnet-Icon.png'/>
              <p>.Net</p>
            </div>                    
      </div>
    </div>
  )
}

export default Habilidades