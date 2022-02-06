import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";

const setStlyes = makeStyles({
  root: {
    backgroundColor: "",
    position: "fixed",
    bottom: 0,
    minWidth: "100vh",
  },
});
function Footer() {
  const classes = setStlyes();
  return (
    <div className={classes.root}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default Footer;
