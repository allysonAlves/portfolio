import { useState , useEffect } from 'react'
import './App.css'
import Nav from './Components/nav/Nav'
import QuemSou from './Components/Sobre/Sobre'
import Habilidades from './Components/Habilidades/Habilidades'
import Projetos from './Components/Projetos/Projetos'
import { ThemeProvider, createTheme } from '@mui/material'
import Contact from './Components/Contact/Contact'
import { Curriculo } from './Components/Curriculo'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <div className="App">  
      <ThemeProvider theme={darkTheme}>
        <Nav/>
        <QuemSou/>
        {/* <Habilidades/> */}
        <Projetos/>
        {/* <Curriculo/>   */}
        <Contact/>  
      </ThemeProvider>
    </div>
  )
}

export default App
