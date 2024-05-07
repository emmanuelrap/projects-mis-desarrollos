import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Paper,
  Link,
} from "@mui/material";

const AboutMe = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 2 }}>
        <Avatar
          alt="John Doe"
          src="/yo.png"
          sx={{ width: 200, height: 200, mx: "auto", mb: 2 }}
        />
        <Typography variant="h4" gutterBottom>
          Carlos Zambrano
        </Typography>
        <br />
        <Typography variant="h6" gutterBottom x={{ textAlign: "justify" }}>
          ¡Saludos! Soy Carlos Zambrano, un apasionado egresado de la carrera de
          sistemas del Instituto Tecnológico.
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom sx={{ textAlign: "justify" }}>
          Me considero un entusiasta de la tecnología y un amante de todo lo
          relacionado con la informática. Con más de 2 años de experiencia en el
          desarrollo Full Stack MERN, estoy constantemente explorando y
          expandiendo mis habilidades en el mundo digital.
        </Typography>

        <br />
        <Typography>
          Portfolio:{" "}
          <Link
            href="https://zam-porfolio.netlify.app/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://zam-porfolio.netlify.app/#
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutMe;
