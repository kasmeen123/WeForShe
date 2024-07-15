

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Box, Button, styled, Typography } from '@mui/material';
// import LoginDialog from "../login/LoginDialog";
// import { useState, useContext } from 'react';
// import { DataContext } from '../../context/DataProvider';

// const Wrapper = styled(Box)`
//   color: black;
//   margin-left: 50px;
//   display: flex;
//   align-items: center; /* Center items vertically */
// `;

// const LoginButton = styled(Button)`
//   color: black;
//   background: #FFFFFF;
//   text-transform: none;
//   padding: 5px 20px;
//   border-radius: 4px; 
//   box-shadow: none;
//   font-weight: 600;
//   height: 32px;
//   margin-right: 20px; 
//   width: 120px;
//   &:hover {
//     background: #F13AB1; 
//     color: #fff;
//   }
// `;

// const AccountButton = styled(Button)`
//   color: white;
//   background: #F13AB1;
//   text-transform: none;
//   padding: 5px 20px;
//   border-radius: 4px; 
//   box-shadow: none;
//   font-weight: 600;
//   height: 32px;
//   margin-right: 20px; 
//   width: 120px;
//   &:hover {
//     background: #F13AB1;
//   }
//   &:focus {
//     outline: none;
//     box-shadow: none;
//   }
// `;

// const Left = () => {
//   const [open, setOpen] = useState(false);
//   const { account } = useContext(DataContext);

//   const openDialog = () => {
//     setOpen(true);
//   };

//   return (
//     <Wrapper>
//       {
//         account ? 
//         <AccountButton variant="contained">{account}</AccountButton> :
//         <LoginButton variant="contained" onClick={openDialog}>Login</LoginButton>
//       }
//       <ShoppingCartIcon style={{ marginLeft: '10px' }} />
//       <LoginDialog open={open} setOpen={setOpen} />
//     </Wrapper>
//   );
// };

// export default Left;

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Button, styled, Typography } from '@mui/material';
import LoginDialog from "../login/LoginDialog";
import { useState, useContext } from 'react';
import { DataContext } from '../../context/DataProvider';

const Wrapper = styled(Box)`
  color: black;
  margin-left: 50px;
  display: flex;
  align-items: center; /* Center items vertically */
`;

const LoginButton = styled(Button)`
  color: white; /* Change text color to white */
  background: #FD913C; /* Default background color */
  text-transform: none;
  padding: 5px 20px;
  border-radius: 4px; 
  box-shadow: none;
  font-weight: 600;
  height: 32px;
  margin-right: 20px; 
  width: 120px;
  &:hover {
    background: #F13AB1 ; /* Hover background color */
    color: #fff; /* Keep text color white */
  }
`;

const AccountButton = styled(Button)`
  color: white; /* Change text color to white */
  background: #F13AB1; /* Default background color */
  text-transform: none;
  padding: 5px 20px;
  border-radius: 4px; 
  box-shadow: none;
  font-weight: 600;
  height: 32px;
  margin-right: 20px; 
  width: 120px;
  &:hover {
    background: #FD913C; /* Hover background color */
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const Left = () => {
  const [open, setOpen] = useState(false);
  const { account } = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {
        account ? 
        <AccountButton variant="contained">{account}</AccountButton> :
        <LoginButton variant="contained" onClick={openDialog}>Login</LoginButton>
      }
      <ShoppingCartIcon style={{ marginLeft: '10px' }} />
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default Left;
