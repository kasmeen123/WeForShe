
// import { Box, Typography, styled } from "@mui/material";

// const Wrapper = styled(Box)`
//   display: flex;
//   margin: 0 3% 0 12%;
//   & > p, & > div {
//     margin-right: 40px;
//     font-size: 14px;
//     font-weight: 520;
//     color: black;
//     white-space: nowrap;
//     transition: color 0.3s ease, transform 0.3s ease;
//     cursor: pointer;
//     &:hover {
//       color: #F13AB1;
//       transform: scale(1.1);
//     }
//   }
// `;

// const StyledLinkContainer = styled(Box)`
//   position: relative;
//   display: inline-block;
// `;

// const Superscript = styled(Typography)`
//   position: absolute;
//   top: -5px; /* Adjust as needed */
//   right: -30px; /* Increase to shift further right */
//   font-size: 10px;
//   color: #FD913C;
//   font-weight: 600;
//   background: white; /* To ensure it doesn't blend with the background */
//   padding: 0 4px; /* Optional: to provide some spacing around the text */
//   border-radius: 3px; /* Optional: for a better look */
// `;

// const StyledLink = styled(Typography)`
//   color: black;
//   text-decoration: none;
//   transition: color 0.3s ease, text-decoration 0.3s ease;
//   &:hover {
//     color: #F13AB1;
//     text-decoration: none;
//   }
// `;

// const CustomButtons = () => {
//   return (
//     <Wrapper>
//       <Typography>MEN</Typography>
//       <Typography>WOMEN</Typography>
//       <Typography>KIDS</Typography>
//       <Typography>HOME & LIVING</Typography>
//       <Typography>BEAUTY</Typography>
//       <StyledLinkContainer>
//         <Superscript>NEW</Superscript>
//         <StyledLink component="a" href="https://mediafiles.botpress.cloud/527502e3-c141-4317-baf5-89b97c78d6c7/webchat/bot.html">MYNSYLE</StyledLink>
//       </StyledLinkContainer>
//     </Wrapper>
//   );
// }

// export default CustomButtons;

import { Box, Typography, styled } from "@mui/material";

const Wrapper = styled(Box)`
  display: flex;
  align-items: center; /* Center align items vertically */
  margin: 0 3% 0 12%;
  white-space: nowrap; /* Prevent line breaks */
  
  & > p, & > div {
    margin-right: 40px;
    font-size: 14px;
    font-weight: 520;
    color: black;
    transition: color 0.3s ease, transform 0.3s ease;
    cursor: pointer;

    &:hover {
      color: #FD913C;
      transform: scale(1.1);
    }
  }
`;

const StyledLinkContainer = styled(Box)`
  position: relative;
  display: inline-block;
`;

const Superscript = styled(Typography)`
  position: absolute;
  top: -5px; /* Adjust as needed */
  right: -30px; /* Increase to shift further right */
  font-size: 10px;
  color: #F13AB1;
  font-weight: 600;
  background: white; /* To ensure it doesn't blend with the background */
  padding: 0 4px; /* Optional: to provide some spacing around the text */
  border-radius: 3px; /* Optional: for a better look */
`;

const StyledLink = styled(Typography)`
  color: black;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    color: #FD913C;
    text-decoration: none;
  }
`;

const CustomButtons = () => {
  return (
    <Wrapper>
      <Typography>MEN</Typography>
      <Typography>WOMEN</Typography>
      <Typography>KIDS</Typography>
      <Typography>HOME & LIVING</Typography>
      <Typography>BEAUTY</Typography>
      <StyledLinkContainer>
        <Superscript>NEW</Superscript>
        <StyledLink component="a" href="https://mediafiles.botpress.cloud/527502e3-c141-4317-baf5-89b97c78d6c7/webchat/bot.html">MYNSYLE</StyledLink>
      </StyledLinkContainer>
    </Wrapper>
  );
}

export default CustomButtons;
