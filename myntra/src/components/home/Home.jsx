import React from 'react'
import Navbar from './Navbar'
import Sldes from './Sldes'
import {Box, styled} from '@mui/material'

const Comp = styled(Box)`
      padding: 20px 50px;
      bacground: #F2F2F2
`
const Home = () => {
  return (
    <>
      <Navbar/>
      <Comp>
      <Sldes/>
      </Comp>
    </>
  )
}

export default Home
