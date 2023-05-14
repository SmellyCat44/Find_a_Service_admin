import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { createTheme, Link, Typography, TextField, Button, Container, CssBaseline, Avatar, Box, Grid, Paper } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';

const theme = createTheme();

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const AdminLogin = () => { 

  const [user,setUser] = useState({
    user_id:"",
    user_pwd:""
  })

  const {user_id, user_pwd} = user;
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8082/admin/login?admin_id="+user_id+"&admin_pwd="+user_pwd)
    .then((response) => {
      console.log(response.data)
      localStorage.setItem("user_id",response.data)
      console.log("user_id",localStorage.getItem("user_id"))    
    })

    navigate('/adminnav')
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} component={Paper} elevation={6} square sx={{
        backgroundImage: 'url(https://source.unsplash.com/random?admin)', // Replace this URL with your image URL
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}/>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="user_id"
              label="User ID"
              name="user_id"
              autoComplete="user_id"
              autoFocus
              value={user_id}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="user_pwd"
              label="Password"
              type="password"
              id="user_pwd"
              autoComplete="current-password"
              value={user_pwd}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
             
              sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  };
  