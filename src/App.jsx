import { useState } from 'react'
import './App.css'

import Logo from './assets/logoally.png'
import Foto from './assets/eufoto1.png'
import reactLogo from './assets/react.svg'
import iconc from './assets/icon-c.png'
import iconjavascript from './assets/icon-javascript.png'
import iconunity from './assets/icon-unity.png'
import iconreact from './assets/icon-react.png'

import imageAppFisc from './assets/images-app-fisc/app-fisc.jpeg'
import imageMensic from './assets/jogo-mensic/mensic.jpeg'
import imageByMovie from './assets/bymovies/bymovie.jpeg'



function App() {
  const [count, setCount] = useState(0)

  var portfoliosection = document.getElementsByClassName('projetos');

  const goToSection = () => {
    portfoliosection[0].scrollIntoView();
  }

  return (
    <div className="App">
      <div className='top'>
        <div className='menu'>          
          <button> Inicio</button>
          <button> Quem sou</button> 

          <div className='divlogo'>
            <img className='logo' src={Logo}/>   

          </div>
          
          <button onClick={() => goToSection()}>Projetos</button>
          <button>Contato</button>
          
        </div>

        <div className="sobre">
          <img src={Foto}/>
          <div className='textosquemsou'>
            <p className='textorange'>Olá,</p>
            <p className='textoquemsou'>sou Allyson Alves, estudante de Análise e Desenvolvimento de Sistemas pela faculdade Estácio de Sá, tenho habilidades em desenvolvimento web e mobile, atuo como autônomo desenvolvendo sistemas e assets para a plataforma Unity Asset Store, atualmente com 2 assets publicados. </p>
          </div>          
        </div>     

        
      </div>

      <section className='projetos'>

        <ul className="habilidadesbox">
          <ol>
            <img src={iconjavascript}/>
            <p>JavaScript</p>
          </ol>
          <ol>
            <img src={iconreact} width={100}/>
            <p>React</p>
          </ol>
          <ol>
            <img src={iconc}/>
            <p>C#</p>
          </ol>
          <ol>
            <img src={iconunity}/>
            <p>Unity</p>
          </ol>
        
        </ul>

        <h1>PORTFÓLIO</h1>

        <div className="boxprojetos">
        
        
          <div className='projectItem bymovie'>
            <img src={imageByMovie}/>
          </div> 

          <div className='projectItem mensic'>
            <img src={imageMensic}/>
          </div> 

          <div className='projectItem fisc'>
            <img src={imageAppFisc}/>
          </div>     
                  
          
        </div>
          
      </section>

      <section className='contato'>


      </section>
        

      <div className="middle">
       

      </div>
      
    </div>
  )
}

export default App
