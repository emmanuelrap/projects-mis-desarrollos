import { Alert, Box, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

const ProjectLocalization = () => {
  const [locations, setLocations] = useState([]);
  const [lastLocation, setLastLocation] = useState(null);

  useEffect(() => {
    const storedLocations = JSON.parse(localStorage.getItem("locations"));
    if (storedLocations) {
      setLocations(storedLocations);
    }
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newLocation = { latitude, longitude };
          setLastLocation(newLocation);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const deleteLocation = (index) => {
    const updatedLocations = locations.filter((_, i) => i !== index);
    setLocations(updatedLocations);
    localStorage.setItem("locations", JSON.stringify(updatedLocations));
  };

  useEffect(() => {
    const updateLocationWithCP = async (location) => {
      const cp = await getAddressFromCoordinates(
        location.latitude,
        location.longitude
      );
      return { ...location, cp };
    };

    if (lastLocation) {
      updateLocationWithCP(lastLocation).then((updatedLocation) => {
        setLocations((prevLocations) => [...prevLocations, updatedLocation]);
        localStorage.setItem(
          "locations",
          JSON.stringify([...locations, updatedLocation])
        );
      });
    }
  }, [lastLocation]);

  const getAddressFromCoordinates = async (latitude, longitude) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    );
    const data = await response.json();
    return data.address ? data.address.postcode : "Not found";
  };

  return (
    <Box>
      <Paper sx={{ py: 1, mb: 2 }}>
        <Typography variant="h5" sx={{ maxWidth: 600, mb: 1, m: "auto" }}>
          <strong>Ejercicio 1</strong>
        </Typography>
        <Typography sx={{ textAlign: "justify", mx: 2 }}>
          Elige el lenguaje y framework que te haga sentir más cómodo. El
          ejercicio consiste en crear una app para dispositivos móviles de
          tracking: Nuestra app tiene un gran botón de "LOCATION NOW" al
          presionarlo guarda en el dispositivo la latitud y longitud. Es posible
          ver la lista de las ubicaciones almacenadas. (EXTRA) Si fue muy fácil,
          agregamos un condimento que se tomará en cuenta: En la lista de las
          ubicaciones podemos ver la dirección postal de ese punto en
          específico. Necesitamos que nos compartas el link al repo dónde está
          tu ejercicio, sientete libre de explicarnos cualquier cosa extra en el
          ReadMe.
        </Typography>
      </Paper>

      <Paper sx={{ p: 1 }}>
        <Button
          variant="contained"
          onClick={getLocation}
          fullWidth
          sx={{ py: 2 }}
        >
          <AddLocationAltIcon sx={{ mr: 1 }} />
          LOCATION NOW
        </Button>
        <List>
          {locations.length === 0 && (
            <Alert severity="info">You don't have any saved locations</Alert>
          )}
          {locations.map((location, index) => (
            <ListItem key={index} sx={{ textAlign: "center", m: "auto" }}>
              <ListItemText
                primary={`Latitude: ${location.latitude}, Longitude: ${location.longitude}`}
              />
              <ListItemText primary={`C.P: ${location.cp}`} />
              <IconButton
                aria-label="delete"
                onClick={() => deleteLocation(index)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ProjectLocalization;
