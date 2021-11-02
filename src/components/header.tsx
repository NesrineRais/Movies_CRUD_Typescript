import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar sx={{ mx: "auto" }}>
          <Typography variant="h6" color="inherit" noWrap>
            <Link to="/">List Movies</Link>
            <Link to="/add">Add</Link>
            <Link to="/Edit">Edit</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
