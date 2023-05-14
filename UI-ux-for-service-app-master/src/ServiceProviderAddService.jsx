import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';
import { TextField, FormControl, Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Stack from '@mui/material/Stack';
import axios from "axios";





const theme = createTheme();

export const ServiceProviderAddService = () => {
    // const theme = createTheme();
    const [startDate, setStartDate] = useState(new Date());
    const [description, setDescription] = useState("");
    const [prices, setPrices] = useState("");
    const [availability, setAvailability] = useState("");
    const [area, setArea] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        // //   username: data.get('username'),
        // //   password: data.get('password'),
        //   // description: data.get('description'),
        //   // address: data.get('address'),
        // });
        navigate('/ServiceProviderHome')
      };

      const handleOnClick = async (e) => {
        e.preventDefault();
        console.log("data : ", description, prices, availability, area); 
        // await axios.post("http://localhost:8082/service/save?)
        navigate('/serviceproviderhome');
        
        };

        const areas = [
          {
            id: 1,
            name: 'Southampton',
          },
          {
            id: 2,
            name: 'London',
          },
          {
            id: 3,
            name: 'Manchester',
          },
          {
            id: 4,
            name: 'Birmingham',
          },
          {
            id: 5,
            name: 'Edinburgh',
          },
          {
            id: 6,
            name: 'Leeds',
          },
        ];
        
    const navigate = useNavigate();


    return (
        <div>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
              <Grid item xs={12}>
                <TextField
                required
                fullWidth
                name="description"
                id="outlined-multiline-static"
                label="Description"
                // value={"This is our chat like feature where user and service provider will add their comments. We need to fetch the older comments and provide this dialogue box for new comments addition. Fetch all data using IDs"}
                multiline
                rows={10}
                // defaultValue="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
            
               
              <Grid item xs={12}>
                <h1>Photos</h1>
              </Grid>
              <Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="prices"
                  label="prices"
                  // type=""
                  id="prices"
                  autoComplete="prices"
                  value={prices}
                  onChange={(e) => setPrices(e.target.value)}
                />
                </Grid>
                </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="availability"
                  label="availability"
                  // type=""
                  id="availability"
                  autoComplete="availability"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                />
                </Grid>
                <Grid item xs={12}>
  <select value={area} onChange={(e) => setArea(e.target.value)}>
    {areas.map((area) => (
      <option key={area.id} value={area.name}>
        {area.name}
      </option>
    ))}
  </select>
</Grid>
              <Grid item xs={12}>
            
              </Grid>
            </Grid>

              {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
              
              <Grid item xs={12}></Grid>
          
            <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success"  onClick={handleOnClick}>
                Submit
            </Button>
            <Button variant="contained" color="success">Accept</Button>
            <Button color="secondary">Reject</Button>

        </Stack>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
        </div>
    )
}
  
