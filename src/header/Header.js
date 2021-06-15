import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

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
  button: {
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <Typography variant="h6" className={classes.title}>
            MTD Bank
          </Typography>
          <Button className={classes.button} color="inherit">
            ABOUT AS
          </Button>
          <Button className={classes.button} color="inherit">
            PRICE
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
