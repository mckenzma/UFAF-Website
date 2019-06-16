import React from "react";
// import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// import "./styles.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  card: {},
  toolbar: theme.mixins.toolbar
});

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            UFAF
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.root} elevation={1}>
            <div className={classes.toolbar} />
            <Typography variant="h5" component="h3">
              ufaf logos
            </Typography>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={3}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Chuck Norris System
                    </Typography>
                    <Typography component="p">stuff</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      UFAF Krav Maga Force
                    </Typography>
                    <Typography component="p">stuff</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      UFAF BJJ
                    </Typography>
                    <Typography component="p">stuff</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      UFAF Affiliate
                    </Typography>
                    <Typography component="p">stuff</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      UFAF BMMS
                    </Typography>
                    <Typography component="p">stuff</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.root} elevation={1}>
            <div className={classes.toolbar} />
            <Typography variant="h5" component="h3">
              main landing page
            </Typography>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={3}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      ITC Countdown
                    </Typography>
                    <Typography component="p">stuff</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      UFAF Background
                    </Typography>
                    <Typography component="p">stuff</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Login
                    </Typography>
                    <Typography component="p">stuff</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="h5" component="h3">
              Become a UFAF Member
            </Typography>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Chuck Norris System
                    </Typography>
                    <Typography component="p">
                      I am an under black belt rank student of a UFAF CNS
                      Charter School or Certified CNS Instructor applying for
                      UFAF membership for the first time or an existing UFAF
                      member that needs to update payment info or add another
                      program or a past UFAF CNS student of ANY rank (white-10th
                      black) re-activating a membership after a lapse or a UFAF
                      CNS 2nd Degree or higher Black Belt applying for a school
                      charter Not sure or need more info... Click Here
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      UFAF Krav
                    </Typography>
                    <Typography component="p">
                      I am an individual training under a UFAF KMF Charter
                      School or Certified KMF Instructor applying for UFAF
                      membership for the first time or an existing UFAF member
                      that needs to update payment info or add another program
                      or a past UFAF KMF member re-activating a membership after
                      a lapse or a UFAF KMF Level 2 or higher Instructor
                      applying for a school charter Not sure or need more
                      info... Click Here
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      UFAF BJJ
                    </Typography>
                    <Typography component="p">
                      I am an individual training under a UFAF BJJ Charter
                      School or Certified UFAF BJJ Instructor applying for UFAF
                      membership for the first time or an existing UFAF member
                      that needs to update payment info or add another program
                      or a past UFAF BJJ member re-activating a membership after
                      a lapse or a UFAF BJJ Instructor applying for a school
                      charter Not sure or need more info... Click Here
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      UFAF Affiliate
                    </Typography>
                    <Typography component="p">
                      I am an individual martial artist, or training with a UFAF
                      Affiliate School or Instructor, applying for UFAF
                      membership for the first time or a black belt in another
                      stye that is training to test into the Chuck Norris
                      System™ or an existing UFAF Affiliate member that needs to
                      update payment info or add another program or a past UFAF
                      Affiliate member re-activating a membership after a lapse
                      or an Instructor/School Owner applying for an Affiliate
                      School Charter Not sure or need more info... Click Here
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="h5" component="h3">
              Find a school
            </Typography>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Map goes here
                    </Typography>
                    <Typography component="p">map goes here</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="h5" component="h3">
              General info
            </Typography>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      some stuff
                    </Typography>
                    <Typography component="p">some stuff</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      About UFAF
                    </Typography>
                    <Typography component="p">some stuff</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      About Chuck Norris System
                    </Typography>
                    <Typography component="p">some stuff</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      About our founder
                    </Typography>
                    <Typography component="p">some stuff</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Find a school
                    </Typography>
                    <Typography component="p">some stuff</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Website links
                    </Typography>
                    <Typography component="p">some stuff</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Contacting UFAF
                    </Typography>
                    <Typography component="p">some stuff</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
