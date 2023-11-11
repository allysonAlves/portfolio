import React from 'react'
import iconc from '../../assets/icon-c.png'
import iconjavascript from '../../assets/icon-javascript.png'
import iconreact from '../../assets/icon-react.png'
import firebaseIcon from '../../assets/icon-firebase.png'
import dotnetIcon from '../../assets/dotnet-icon.png'

import styles from './Habilidades.module.css'

const Habilidades = () => {
  return (
    <div>
      <div className={styles.div_habilidades}>
            <div className={styles.item} title='React'>
              <img src={iconreact}/>
              <p>React</p>
            </div>
            <div className={styles.item} title='Javascript'>
              <img src={iconjavascript}/>
              <p>JavaScript</p>
            </div>
            <div className={styles.item} title='C#'>
              <img src={iconc}/>
              <p>C#</p>
            </div>
            <div className={styles.item} title='DotNet'>
              <img src={dotnetIcon}/>
              <p>.Net</p>
            </div> 
            <div className={styles.item} title='Firebase'>
              <img src={firebaseIcon}/>
              <p>Firebase</p>
            </div>          
      </div>
    </div>
  )
}

export default Habilidades