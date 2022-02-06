import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const setStlyes = makeStyles({
  root: {
    backgroundColor: "gray",
  },
});
function Footer() {
  const classes = setStlyes();
  return (
    <div>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "80vh" }} />
      </Container>
      <BottomNavigation className={classes.root} showLabels>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default Footer;
