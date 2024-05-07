import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const ProjectTree = () => {
  const [treeRows, setTreeRows] = useState([]);
  const [isTreeComplete, setIsTreeComplete] = useState(false);
  const [isStarBold, setIsStarBold] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (treeRows.length < 10) {
        setTreeRows((prevRows) => [...prevRows, treeRows.length]);
      } else {
        setIsTreeComplete(true);
        clearTimeout(timer);
      }
    }, 250);

    // Toggle the font weight of the star every second
    const starTimer = setInterval(() => {
      setIsStarBold((prev) => !prev);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(starTimer);
    };
  }, [treeRows]);

  const renderTree = () => {
    let tree = [];
    for (let i = 0; i < treeRows.length; i++) {
      tree.push(
        <div key={i} style={{ textAlign: "center" }}>
          {"".repeat(10 - treeRows[i]) + "0".repeat(2 * treeRows[i] + 1)}
        </div>
      );
    }
    return tree;
  };

  const resetTree = () => {
    setTreeRows([]);
    setIsTreeComplete(false);
  };

  return (
    <Box>
      <Paper sx={{ py: 1, mb: 2 }}>
        <Typography variant="h5" sx={{ maxWidth: 600, mb: 1, m: "auto" }}>
          <strong>Ejercicio 2</strong>
        </Typography>
        <Typography sx={{ textAlign: "justify", mx: 2 }}>
          Imprime un bonito árbol de Navidad con su propia estrella en la punta
          usando el código más corto posible. La estrella del árbol es un
          asterisco (*) y el cuerpo del árbol está hecho de 0. El árbol debe
          tener 10 filas de altura. Cada fila debe estar correctamente identada
          de manera que la fila anterior quede centrada sobre la nueva.
          Cualquier fila dada debe
        </Typography>
      </Paper>

      <Paper sx={{ p: 1 }}>
        {/* Render the tree */}
        <pre>
          <Typography
            variant="h5"
            style={{
              marginLeft: "1.5em",
              marginRight: "1.5em",
              fontWeight: isStarBold ? "normal" : "bold",
            }}
          >
            *
          </Typography>
          {renderTree()}
        </pre>
        {/* Show button only when the tree is complete */}
        {isTreeComplete && (
          <Button
            variant="contained"
            onClick={resetTree}
            style={{ backgroundColor: "brown", color: "white" }}
          >
            Again
          </Button>
        )}
      </Paper>
    </Box>
  );
};

export default ProjectTree;
