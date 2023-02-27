
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";
import Logo from "../assets/images/Logo-1.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";



const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "100px",
          xs: "40px",
        },
        mt: { sm: "22px", xs: "20px" },
        justifyContent: "none",
      }} px='20px'
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "60px", height: "60px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#F0ECCF",
            borderBottom: "3px solid #A3BB98",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#F0ECCF" }}
        >
          Exercises
        </a>
        
      </Stack>
    </Stack>
  );
};




export default Navbar;
