import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Toolbar, Container, Paper } from "@material-ui/core";

import "./styles.css";

import logo from "../../assets/logotext2.svg";
import tel from "../../assets/main_photo.png";

const usestyles = makeStyles((theme) => ({
  pageHome: {
    background: "#3f3a62",
  },
  content: {
    padding: theme.spacing(8, 0, 6),
  },
  mainH1: {
    color: "#ec4b9c",
  },

  mainP: {
    color: "#feede3",
  },

  mainA: {
    background: "#beb6ff",
  },

  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
}));

const Home = () => {
  const classes = usestyles();
  return (
    <div className={classes.pageHome}>
      <Toolbar className={classes.pageHome}>
        <img src={logo} alt="KawaiiChat" />
      </Toolbar>
      <Container fixed>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item md={8} sm={12} lg={6}>
            <Container className="content" maxWidth="md">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                className={classes.mainH1}
                gutterBottom
              >
                Sua conexão entre Amantes de Cultura Pop Japonesa
              </Typography>
              <Typography
                variant="h5"
                align="center"
                className={classes.mainP}
                paragraph
              >
                Ajudamos pessoas a encontrarem novas amizades e formarem laços.
              </Typography>
            </Container>
          </Grid>
          <Grid item md={4} sm={12} lg={6}>
            <Container  maxWidth="sm">
              <img src={tel} alt="APP"/>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
