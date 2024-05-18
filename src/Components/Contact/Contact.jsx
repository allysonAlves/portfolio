import React from 'react';
import styles from './contact.module.css';
import { Icon } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <section id='contato' className={styles.div_contact}>
        <div>
            <h2 className={styles.title}> Contato </h2>
            <div className={styles.person_data}>
                {/* <div>
                    Telefone: (21) 99882-4062
                </div> */}
                <div>
                    E-mail: allysonalves.dev@gmail.com                    
                </div>
            </div> 
            <div className={styles.icons}>
                <a href="https://instagram.com/allyson.aov?igshid=MTBrZnJ4aW9hMnFvbg==" target="_blank">
                    <InstagramIcon fontSize='large'/>
                </a>               
                <a href="https://www.linkedin.com/in/allyson-alves/" target="_blank">
                    <LinkedInIcon fontSize='large'/>
                </a>               
                <a href="https://github.com/allysonAlves" target="_blank">
                    <GitHubIcon fontSize='large'/>
                </a>  
            </div>          
        </div>
    </section>
  )
}

export default Contact