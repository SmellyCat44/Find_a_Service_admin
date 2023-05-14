import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/service">
            <Typography variant="h6" className={classes.title}>
              View New Service Provider
            </Typography>
          </Button>
          <Button color="inherit" component={Link} to="/viewpage">
            <Typography variant="h6" className={classes.title}>
              View Reviews
            </Typography>
          </Button>
          <Button color="inherit" component={Link} to="/serviceview">
            <Typography variant="h6" className={classes.title}>
              View Service Provider Reviews
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
