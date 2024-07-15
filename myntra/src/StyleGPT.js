import React from 'react';
import { Box, Typography, styled } from "@mui/material";

// Create a styled component for the background
const Background = styled(Box)`
  background: url('https://example.com/your-background-image.jpg') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const StyleGPTPage = () => {
  return (
    <Background>
      <Typography variant="h1">Welcome to MynStyle</Typography>
    </Background>
  );
};

export default StyleGPTPage;
