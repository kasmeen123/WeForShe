import {AppBar, Toolbar,Box, styled} from '@mui/material'
import Search from './Search'
import CustomButtons from './CustomButtons'
import Left from './Left'

const StyledHeader = styled(AppBar)`
        background: #fff;
        height: 68px;
         box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
const Header = () => {
     const logoURL = 'https://logos-world.net/wp-content/uploads/2021/02/New-Myntra-Logo.png'
  return (
   
    <StyledHeader>
        <Toolbar style={{minWidth: 30}}>
            <img src={logoURL} alt="logo" style={{width: 70}}/>
            <Box>
              <CustomButtons/>
            </Box>
            <Search/>
            <Left/>
        </Toolbar>
        
      
    </StyledHeader>
  )
}

export default Header
