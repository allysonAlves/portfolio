import React, { useEffect } from "react";
import $ from "jquery";
import styles from "./Projetos.module.css";
import SmoothVisible from "../SmoothVisible/SmoothVisible";
import { my_projects as projects } from "../../services/project.services";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Typography,
  Stack,
  Box,
  Tooltip
} from "@mui/material";
import DescriptionSlider from "./DescriptionSlider/DescriptionSlider";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { motion } from "framer-motion";
import AccordionUsage from "../Accordion";

const Projetos = () => {
  return (
    <section id="projetos" className={styles.projetos}>
      <h1 className={styles.title}>Projetos</h1>
      <div className={styles.container}>
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1 }}
          >
            <Card sx={{ maxWidth: 345 }}> 
              <CardMedia
                sx={{ height: 180 }}
                image={project.photo}
                title={project.title}
              />
              <Stack justifyContent={"space-between"}  direction="row">
                <Stack padding={0.5} direction="row">
                  <IconButton title="repositório" size="small">
                    <GitHubIcon />
                  </IconButton>
                  <IconButton title="ver site" size="small">
                    <OpenInNewIcon />
                  </IconButton>
                </Stack>                
                <Stack marginRight={1} spacing={1} alignItems='center' direction="row">                 
                  { project.stacks.map(stack =>  <stack.Icon key={stack.title} title={stack.title}/>)}          
                </Stack>
              </Stack>
              <AccordionUsage
              title={
                <Typography variant="h5" component="div">
                {project.title}
                </Typography>
              }
              body={
                <Typography                  
                  variant="body2"
                  color="text.secondary"
                >
                  {project.description}
                </Typography>
              }
              />                
              {/* <CardContent>
                <Typography
                  sx={{ color: "orange", cursor: "pointer" }}
                  textAlign="end"
                >
                  ver mais
                </Typography>
              </CardContent>               */}
            </Card>
          </motion.div>

          // <DescriptionSlider
          // key={projects.indexOf(project)}
          // project={project}/>
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
        ))}
      </div>
    </section>
  );
};

export default Projetos;
