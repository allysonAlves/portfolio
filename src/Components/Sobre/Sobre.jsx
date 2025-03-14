import React, { useEffect, useState } from "react";
import styles from "./Sobre.module.css";
import Foto from "./../../assets/eufoto1.png";
import dotgray from "./../../assets/profile/dotgray.png";
import dotorange from "./../../assets/profile/dot_orange.png";
import fotoProfile from "./../../assets/profile/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import $ from "jquery";
import { Box, TextareaAutosize } from "@mui/material";
import { motion } from "framer-motion";

const QuemSou = () => {
  const [titleProgress, setTitleProgress] = useState({
    iamDone: false,
    nameDone: false,
  });
  const textPt =
    "sou Allyson Alves, estudante de Análise e Desenvolvimento de Sistemas pela faculdade Estácio de Sá, tenho habilidades em desenvolvimento web e mobile, sou estagiário React / .Net na empresa Target Work, também atuo desenvolvendo sistemas e assets para a plataforma Unity Asset Store, atualmente com 3 assets publicados.";

  return (
    <section id="quemsou" className={styles.div_quemsou}>
      <div className={styles.sobre}>
        <Box width={300} height={300} sx={{ position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ rotate: 360, opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            style={{ height: "100%", width: "100%", position: "absolute" }}
          >
            <img src={dotgray} width="100%" height="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ rotate: -360, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            style={{ height: "100%", width: "100%", position: "absolute" }}
          >
            <img src={dotorange} width="100%" height="100%" />
          </motion.div>
          <motion.div
            transition={{ duration: 3, delay: 1 }}
            style={{ height: "100%", width: "100%", position: "absolute" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img
              style={{ borderRadius: "50%", padding: 70 }}
              src={fotoProfile}
              width="100%"
              height="100%"
            />
          </motion.div>
        </Box>
        <div className={styles.div_text}>
          <TypeAnimation
            sequence={[
              "Olá, eu sou",
              1,
              () => setTitleProgress((prev) => ({ ...prev, iamDone: true })),
            ]}
            speed={50}
            cursor={false}
            // repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
          {titleProgress.iamDone && (
            <TypeAnimation
              sequence={[
                "Allyson Alves",
                1,
                () => setTitleProgress((prev) => ({ ...prev, nameDone: true })),
              ]}
              speed={50}
              cursor={false}
              // repeat={Infinity}
              style={{ fontSize: "3em", color: "orange", lineHeight: 1 }}
            />
          )}
          {titleProgress.nameDone && (
            <TypeAnimation
              sequence={[
                "Desenvolvedor Full Stack",
                1,
                () => setTitleProgress((prev) => ({ ...prev, iamDone: true })),
              ]}
              speed={50}
              // repeat={Infinity}
              style={{ fontSize: "1.5em", marginTop: 2 }}
            />
          )}

          <p className={styles.texto}>
            {/* {textPt} */}
            {/* <TypeAnimation
              sequence={[textPt]}
              speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
              repeat={Infinity}
              // style={{ fontSize: '2em' }}
            /> */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuemSou;
