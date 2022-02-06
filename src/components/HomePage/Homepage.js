import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ecoimg from "../img/eco-img.jpeg";
const useStyles = makeStyles({
  title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 0px",
    color: "white",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 20px",
    paddingBottom: "90px",
  },
});
function Homepage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h1>Welcome to Eco Bc !</h1>
      </div>
      <div className={classes.card}>
        <Card sx={{ maxWidth: 700 }}>
          <CardMedia
            component="img"
            height="340"
            image={ecoimg}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Eco BC
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ECO BC is a widespread group of squamate companies, with over
              6,000 firms, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="/login" size="small">
              Login
            </Button>
            <Button href="/signup" size="small">
              Sign Up
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Homepage;
