import { useState , useEffect } from 'react'
import './App.css'

import Logo from './assets/logoally.png'
import Foto from './assets/eufoto1.png'
import reactLogo from './assets/react.svg'
import iconc from './assets/icon-c.png'
import iconjavascript from './assets/icon-javascript.png'
import iconunity from './assets/icon-unity.png'
import iconreact from './assets/icon-react.png'

import imageAppFisc from './assets/images-app-fisc/fiscbanner.png'
import imageMensic from './assets/jogo-mensic/mensicbanner.png'
import bymoviebanner from './assets/bymovies/bymoviebanner.png'
import aicarBanner from './assets/aicar/aicarbanner.png'
import mobileControllerBanner from './assets/mobile-controller/mobilecontrollerbanner.png'
import rpgTargetBanner from './assets/aov-rpg-target/rpgTargetBanner.png'
import aovshopBanner from './assets/aovshop/aovshopBanner.png'




function App() {


  useEffect(() => {    
    

    fetch("https://allycadernodoserros-default-rtdb.firebaseio.com/acessos.json")
    .then((response) => response.json())
    .then((data) => 
    { 
      let calc = parseInt(data.acesso) + 1;
      saveData(calc);
    
    }).catch((error) => saveData(1));

    const saveData = (valor) => fetch("https://allycadernodoserros-default-rtdb.firebaseio.com/acessos.json", 
    {
      method:'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({acesso: valor}),
    })
    .then((response) => response.json())
    .then((data) => { console.log('sucess:', data)})
    .catch((error) => { console.log('Error:',error);});

  },[]);
  
  const [count, setCount] = useState(0)

  const contatoSection = document.getElementsByClassName('contato');
  const sobreSection = document.getElementsByClassName('sobre');
  let portfoliosection = document.getElementsByClassName('projetos');
  let containerProjetos = document.getElementsByClassName('container-projetos');

  const goToProjetosSection = () => {    
    portfoliosection[0].scrollIntoView();
  }

  const goToContatoSection = () => {    
    contatoSection[0].scrollIntoView();
  }

  const goToSobreSection = () => {    
    sobreSection[0].scrollIntoView();
  }

  const scrollprojetos = (value) => {   
    containerProjetos[0].scrollLeft = containerProjetos[0].scrollLeft + value; 
  }

  return (
    <div className="App">
      <section className='top'>
        <div className='menu'>          
          <button> Inicio</button>
          <button onClick={() => goToSobreSection()}> Quem sou</button> 

          <div className='divlogo'>
            <img className='logo' src={Logo}/>   

          </div>
          
          <button onClick={() => goToProjetosSection()}>Portfólio</button>
          <button onClick={() => goToContatoSection()}>Contato</button>
          
        </div>

        <div className="sobre">
          <img src={Foto}/>
          <div className='textosquemsou'>
            <p className='textorange'>Olá,</p>
            <p className='textoquemsou'>sou Allyson Alves, estudante de Análise e Desenvolvimento de Sistemas pela faculdade Estácio de Sá, tenho habilidades em desenvolvimento web e mobile, atuo como autônomo desenvolvendo sistemas e assets para a plataforma Unity Asset Store, atualmente com 2 assets publicados. </p>
          </div>          
        </div>         
        
      </section>

      <section className='projetos'>

        <ul className="habilidadesbox">
          <ol>
            <img src={iconjavascript}/>
            <p>JavaScript</p>
          </ol>
          <ol>
            <img src={iconreact}/>
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

        <div className="container-projetos">
          <div className='item-box'>                    
            <img className='item' src={rpgTargetBanner}/>
            <div className='item-information'>
              <p>Asset de target para jogos RPG</p> 
              <div>
                <img src={iconc} title='C#'/>
                <img src={iconunity} title='Unity'/>
              </div>  
              <a href='https://assetstore.unity.com/packages/add-ons/aov-rpg-target-235539' target="_blank" rel="noopener noreferrer"> Ver mais </a>                       
            </div>    
          </div>
          
          <div href='' className='item-box'>          
            <img className='item' src={imageAppFisc}/>
            <div className='item-information'>
              <p>Aplicativo de fiscalização de trânsito com emissão de autos, está sendo desenvolvido em C# com Xamarin Forms.</p>  
            <div>
                <img src={iconc} title='C#'/>
                <img src="https://img.icons8.com/color/48/null/xamarin.png" alt='Xamarin Forms' title='Xamarin Forms'/>
              </div>    
                                    
            </div>
          </div>

          <div className='item-box'>                    
            <img className='item' src={aovshopBanner}/>
            <div className='item-information'>
              <p>Loja de produtos eletrônicos</p> 
              <div>
                <img src={iconc} title='C#'/>
                <img src={iconunity} title='Unity'/>
              </div>  
              <a href='https://aovshop.netlify.app/' target="_blank" rel="noopener noreferrer"> Ver mais </a>                       
            </div>    
          </div>

          <div href='' className='item-box'>            
            <img className='item' src={mobileControllerBanner}/>
            <div className='item-information'>
              <p>Asset de controles para jogos mobile no estilo MOBA desenvolvido em C# e Unity, publicado na Unity Asset Store.</p>
              <div>            
                <img src={iconc} title='C#'/>
                <img src={iconunity} title='Unity'/>
              </div>       
              <a href='https://assetstore.unity.com/packages/add-ons/aov-mobile-controller-227667' target="_blank" rel="noopener noreferrer"> Ver mais </a>                                
            </div>
          </div>

          <div className='item-box'>                    
            <img className='item' src={imageMensic}/>
            <div className='item-information'>
              <p>Jogo RPG que está sendo desenvolvido em C# com a engine Unity.</p> 
              <div>
                <img src={iconc} title='C#'/>
                <img src={iconunity} title='Unity'/>
              </div>  
                                  
            </div>    
          </div>
          
          <div href='' className='item-box'>            
            <img className='item' src={aicarBanner}/> 
            <div className='item-information'>
              <p>Asset de automação de carros para IA de jogos, desenvolvido em C# e Unity. Publicado na Unity Asset Store.</p>
              <div>
                <img src={iconc} title='C#'/>
                <img src={iconunity} title='Unity'/>
              </div>    
              <a href='https://assetstore.unity.com/packages/templates/systems/aov-ai-car-controller-222720' target="_blank" rel="noopener noreferrer"> Ver mais </a>                  
            </div>         
          </div>
          
          <div href='' className='item-box'>            
            <img className='item' src={bymoviebanner}/>
            <div className='item-information'>
              <p>Site de informações sobre filmes consumindo a api IMDB.</p>               
              <div>               
                <img src="https://img.icons8.com/color/48/null/react-native.png" title='ReactJS'/>
                <img src={iconjavascript} title='JavaScript'/>
              </div>
              <a href='https://frolicking-kataifi-10a7db.netlify.app/' target="_blank" rel="noopener noreferrer"> Ver mais </a>                                   
            </div>
              
          </div>
          
         
          
        </div>

        <button onClick={() => scrollprojetos(250)} className='btn-next'><img src="https://img.icons8.com/ios-filled/50/ffffff/forward--v1.png"/></button>
        <button onClick={() => scrollprojetos(-250)} className='btn-back'><img src="https://img.icons8.com/ios-filled/50/ffffff/back.png"/></button>
      </section>

      <section className='contato'>
        <h2>Contato</h2>
        <div className='tel-and-mail'>
          <p>Telefone: (21) 99882-4062</p>
          <p>Email: allysonalves.dev@gmail.com</p>
        </div>       
        
        <div className="boxsociais">
            <a href='https://www.linkedin.com/in/allyson-alves-877629237/' target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/color/48/null/linkedin-circled--v1.png"/>
            </a>
            <a href='https://github.com/allysonAlves' target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/sf-ultralight/50/ffffff/github.png"/>
            </a>
            <a href='https://www.instagram.com/allyson.aov/' target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluency/48/null/instagram-new.png"/>
            </a>

            


        </div>
        <div className='boxmenuinferior'>
          <button onClick={() => window.scrollTo(0,0)}>Inicio</button>
          <button onClick={() => goToSobreSection()}>Quem Sou</button>
          <button onClick={() => goToProjetosSection()}>Portfólio</button>          

        </div>

      </section> 

      <section className='footer'>
      Copyright © 2023 AOV Dev  
      </section>  
    </div>
  )
}

export default App
