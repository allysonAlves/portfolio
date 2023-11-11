import React, { useEffect } from 'react';
import $ from 'jquery';
import styles from './Projetos.module.css';
import SmoothVisible from '../SmoothVisible/SmoothVisible';
import { my_projects as projects } from '../../services/project.services';
import { Paper } from '@mui/material';
import DescriptionSlider from './DescriptionSlider/DescriptionSlider';

const Projetos = () => {
   
  return (
    <section id='projetos' className={styles.projetos}>
      <h1 className={styles.title}>Projetos</h1>              
      <div className={styles.container}>
        {
          projects.map(project => (
            <DescriptionSlider 
            key={projects.indexOf(project)}
            project={project}/>
            // <SmoothVisible key={projects.indexOf(project)} duration={1.5}>
            //     <div style={{flexDirection: project.reverse ?'row-reverse': ''}} className={styles.line}>
            //         <div className={styles.box_image}>
            //            <img src={project.photo} /> 
            //         </div>                    
            //         <Paper style={{right:0}} elevation={5} className={styles.description}>
            //           <h3>{project.title}</h3>
            //           <p>{project.description}</p>
            //         </Paper>
            //     </div>
            // </SmoothVisible>
          ))
        }
      </div>
       
    </section>
  )
}

export default Projetos