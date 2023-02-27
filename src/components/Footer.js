import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Stack
    className="search"
    mt="80px"
    bgcolor="#F0ECCF"
    sx={{
      borderRadius: "20px",
    }}
  >
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "150px", height: "100px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="20px"
      textAlign="center"
      pb="40px"
    >
      <p>© Copyright Quantum Fitness</p>
    </Typography>
  </Stack>
);

export default Footer;
