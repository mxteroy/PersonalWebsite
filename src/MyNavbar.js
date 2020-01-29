import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import './styles/navbar.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  barText: {
    textTransform: "none  !important",
    fontFamily: "Slabo"
  }
})

export default function MyNavbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className="mynavbar" style={{ background: 'transparent', boxShadow: 'none'}}>
      <Grid container justify = "center">
      <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Home" className={classes.barText}/>
              <Tab label="Resume" className={classes.barText}/>
              <Tab label="Notes" className={classes.barText}/>
            </Tabs>
      </Grid>
    </Paper>
  );
}