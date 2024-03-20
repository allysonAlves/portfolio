import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { SiWebrtc ,SiFirebase, SiBootstrap } from "react-icons/si";
import { FaUnity } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { DiJavascript, DiHtml5, DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { IconButton, Tooltip } from "@mui/material";

const stackIcon = {
    Javascript: {
        title: 'Javascript',
        Icon: (props) => <DiJavascript {...props} color="#efd81d"/>             
    },
    ReactJs: {
        title: 'React',
        Icon: (props) => <RiReactjsFill {...props} color="#149eca"/>       
    },
    webRTC: {
        title: 'webRTC',
        Icon: (props) => <SiWebrtc {...props} color="#019717"/>
    },
    Firebase: {
        title: 'Firebase',
        Icon: (props) => <SiFirebase {...props} color="#ffca2a"/>
    },
    Css: {
        title: 'Css',
        Icon: (props) => <DiCss3 {...props} color="#149eca"/>
    },
    HTML: {
        title: 'HTML',
        Icon: (props) => <DiHtml5 {...props} color="#ed6938"/>
    },
    'C#': {
        title: 'C#',
        Icon: (props) => <TbBrandCSharp {...props} style={{borderRadius:5, backgroundColor: '#6c287e', padding:1}} color="#fff"/>
    }, 
    Unity: {
        title: 'Unity',
        Icon: (props) => <FaUnity {...props}/>
    },
    bootstrap: {
        title: 'Bootstrap',
        Icon: (props) => <SiBootstrap {...props}/>
    }
}

export const my_projects = [
    {
        title: 'AOV STREAM',
        description: 'O React Streaming App é um projeto revolucionário que utiliza React em conjunto com Material UI, React Context e Firebase para proporcionar uma experiência de streaming inovadora. Integrando WebRTC para transmitir dados em tempo real, o aplicativo oferece uma interface moderna e responsiva, gerenciamento eficiente de estado, sinalização de conexões via Firebase e a capacidade de trocar mensagens instantâneas durante a transmissão. Esta plataforma redefine os padrões de streaming, permitindo aos usuários compartilhar e consumir conteúdo ao vivo de maneira envolvente e social.',
        photo: '/images/aovstream/aovstream.png',     
        techDetails: [],  
        githubUrl: 'https://github.com/allysonAlves/aovstream',
        deployUrl: 'https://aovstream.netlify.app/',      
        stacks:[
            stackIcon.HTML,
            stackIcon.Css,
            stackIcon.Javascript,
            stackIcon.ReactJs,
            stackIcon.Firebase, 
            stackIcon.webRTC
        ]
    },
    {
        title: 'AovShop',
        description: 'O projeto "AOVShop" é um emocionante projeto de estudo que visa aprofundar e aprimorar as habilidades em desenvolvimento web, design de interface e e-commerce. Este projeto é uma simulação de um e-commerce de eletrônicos para computador, construído utilizando tecnologias como Firebase Firestore, Firebase Authentication, Material UI e Bootstrap, a fim de proporcionar uma experiência de aprendizado prática e contemporânea.',
        photo: '/images/aovshop/aovshop_image.png',       
        techDetails: [
            'Implementação do Firebase Firestore para gerenciar dados de produtos e pedidos. Utilização do Firebase Authentication para permitir que os usuários se autentiquem e acessem recursos personalizados.',
            'Integração de Material UI e Bootstrap para criar uma interface moderna e responsiva.',
            'Desenvolvimento de páginas de produtos simuladas com descrições e imagens de produtos fictícios.',
            'Desenvolvimento do front-end em ReactJS, utilizando Redux para gerenciamento de estados globais',
            'Configuração de métodos de pagamento de demonstração para a finalização de compra.',
            'Implementação de um design com foco na aprendizagem e experimentação das tecnologias escolhidas.'

        ] ,
        githubUrl: 'https://github.com/allysonAlves/aovshop',
        deployUrl: 'https://aovshop.netlify.app/',
        stacks:[
            stackIcon.HTML,
            stackIcon.Css,
            stackIcon.Javascript,
            stackIcon.ReactJs,
            stackIcon.Firebase
        ]
    },
    {
        title: 'ByMovie',
        description: 'O projeto "ByMovie" é uma demonstração de minhas habilidades em desenvolvimento web, focando em uma aplicação que se integra à API do IMDB para fornecer aos usuários acesso a informações detalhadas sobre filmes. O site apresenta várias funcionalidades, incluindo rotas de listagem, detalhes e pesquisa, permitindo aos usuários explorar uma ampla gama de filmes com facilidade.',
        photo: '/images/bymovie/bymovie_image.png',
        githubUrl: 'https://github.com/allysonAlves/bymovies',
        deployUrl: 'https://bymovie.netlify.app/',
        techDetails: [],
        stacks:[
            stackIcon.HTML,
            stackIcon.Css,
            stackIcon.Javascript,
            stackIcon.ReactJs,            
        ]
    },
    {
        title: 'Mensic',
        description: '"Mensic" é um emocionante jogo de RPG desenvolvido na Unity que transporta os jogadores para um universo mágico e vasto, repleto de mistérios, desafios e aventuras inesquecíveis. No papel de um herói destinado a restaurar a harmonia em um mundo dilacerado por forças sombrias, os jogadores explorarão terras exuberantes, enfrentarão criaturas lendárias e desvendarão segredos antigos.',
        photo: '/images/mensic/mensic.jpeg',
        githubUrl: null,
        deployUrl: null,
        techDetails: [],
        stacks:[
            stackIcon["C#"],
            stackIcon.Unity
        ]
    },
    {
        title: 'AOV RPG TARGET',
        description: 'Asset de sistema de alvos com marcador de target para jogos RPG.',
        photo: '/images/rpgtarget/rpgtarget.webp',     
        githubUrl: '',   
        deployUrl: 'https://assetstore.unity.com/packages/add-ons/aov-rpg-target-235539/',
        techDetails: [],
        stacks:[
            stackIcon["C#"],
            stackIcon.Unity
        ]
    },
    
]
