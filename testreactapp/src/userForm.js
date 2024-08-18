import { Grid, Typography, TextField, Button } from "@mui/material";
import React, { useState } from 'react';

const UserForm = (props) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#ffffff",
        marginBottom: "30px",
        display: "block",
      }}
    >
      <Grid item xs={12}>
        <Typography component={"h1"} sx={{ color: "#000000" }}>
          User Form
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          ID
        </Typography>
        <TextField
          type="number"
          id="id"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          variant="outlined"
          sx={{ width: '400px' }}
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          component={"label"}
          htmlFor="name"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Name
        </Typography>
        <TextField
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          sx={{ width: '400px' }}
        />
      </Grid>

      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#00c6e6",
            color: "#000000",
            marginTop: "20px",
            "&:hover": {
              opacity: "0.7",
              backgroundColor: "#00c6e6",
            },
          }}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserForm;
