import { Box, Button, Dialog, TextField, Typography, styled } from "@mui/material"
import {useState, useContext} from 'react'
import { authenticateSignUp, authenticateLogin } from "../../service/api"
import {DataContext} from '../../context/DataProvider'

const Comp = styled(Box)`
      height: 70vh;
      width: 90vh;
`
const Image = styled(Box)`
      background: rgb(255, 105, 193) url(https://cdnl.iconscout.com/lottie/premium/thumb/login-screen-4308924-3582001.gif) center 85% no-repeat;
      background-size: contain;
      height: 83%;
      width: 28%;
      padding: 45px 35px;
      & > p, & > h5 {
      color: #FFFFFF;
      font-weight: 600
      }
`
const Wrapper = styled(Box)`
      display: flex;
      flex-direction: column;
      padding: 25px 35px;
      flex: 1;
      & > div, & > button, & > p {
      margin-top: 20px
      }
`
const LoginButton = styled(Button)`
      text-transform: none;
      background: #FD913C;
      color: #fff;
      height: 48px;
      border-radius: 2px;
`
const Request = styled(Button)`
      text-transform: none;
      background: #fff;
      color: #FD913C;
      height: 48px;
      border-radius: 2px;
      box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%)
`
const Text = styled(Typography)`
      font-size: 12px;
      color: #878787
`
const Account = styled(Typography)`
      font-size: 14px;
      color: #FD913C;
      text-align: center;
      font-weight: 600;
      cursor: pointer
`
const Error = styled(Typography)`
      font-size: 10px;
      color: #ff6161;
      line-height: 0;
      margin-top: 10px;
      font-weight: 600
`

const accountInitialValues = {
      login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
      },
      signUp: {
        view: 'signUp',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
      }
}

const signupInitialValues = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: ''
}
const loginInitialValues = {
      username: '',
      password: ''
}
const LoginDialog = ({open, setOpen}) => {

  const [account, toggleAccount] = useState(accountInitialValues.login)
  const [signup, setSignUp] = useState(signupInitialValues)
  const [login, setLogin] = useState(loginInitialValues)
  const [error, setError] = useState(false)
  
  const {setAccount} = useContext(DataContext)
  const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login)
        setError(false)
    }

    const toggleSignUp = () => {
      toggleAccount(accountInitialValues.signUp)
    }

    const onInputChange = (e) => {
      setSignUp({...signup, [e.target.name]: e.target.value})
    }

    const signupUser = async () => {
      let response = await authenticateSignUp(signup)
      if(!response) return
      handleClose()
      setAccount(signup.firstname)
    }

    const onValueChange = (e) => {
      setLogin({...login, [e.target.name]: e.target.value})
    }

    const loginUser = async () => {
      let response = await authenticateLogin(login)
      console.log(response)
      if(response.status === 200){
        handleClose()
        setAccount(response.data.data.firstname)
      }
      else{
          setError(true)
      }
    }
  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth: 'unset'}}}>
      <Comp>
        <Box style={{display: 'flex', height: '100%'}}>
          <Image>
            <Typography variant='h5'>{account.heading}</Typography>
            <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
          </Image>
        {
        account.view === 'login' ?
        <Wrapper>
        <TextField variant='standard' onChange={(e) => onValueChange(e)} name='username' label="Enter Usernamer"/>

        {error&& <Error>Please enter valid username or password</Error>}

        <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label="Enter Password"/>
        <Text>By continuing, you agree to Myntra's Terms of Use and Privacy Policy.</Text>
       <LoginButton onClick={() => loginUser()}>Login</LoginButton>
        <Typography style={{textAlign: 'center'}}>OR</Typography>
        <Request>Request OTP</Request>
        <Account onClick={() => toggleSignUp()}>New to Myntra? Create an account</Account>
      </Wrapper>
      :
      <Wrapper>
          <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname' label="Enter Firstname"/>
          <TextField variant='standard' onChange={(e) => onInputChange(e)} name='lastname' label="Enter Lastname"/>
          <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label="Enter Username"/>
          <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label="Enter Email"/>
          <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label="Enter Password"/>
          <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone' label="Enter Phone"/>
          <LoginButton onClick={() => signupUser()}> Continue</LoginButton>
          
        </Wrapper>
        }
        </Box>
      </Comp>
    </Dialog>
  )
}

export default LoginDialog
