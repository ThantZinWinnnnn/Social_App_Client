import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import MyPostWidget from '../widgets/MyPostWidget'
import Navbar from "../navbar/Navbar"
import UserWidget from '../widgets/UserWidget'

const HomePage = () => {

  const isNonMobileScreen = useMediaQuery("(min-width : 1000px)");
  const {_id,picturePath} = useSelector((state)=> state.user);

  return (
    <Box>
      <Navbar/>
      <Box width={"100%"} padding="2rem 6%" display={isNonMobileScreen ? "flex" : "block"}
        gap="0.5rem" justifyContent={'space-between'}
      >
        <Box flexBasis={isNonMobileScreen ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath}/>
        </Box>
        <Box flexBasis={isNonMobileScreen ? "42%" : undefined}
          mt={isNonMobileScreen ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath}/>
        </Box>
        {isNonMobileScreen && <Box flexBasis='26%'></Box> }
      </Box>
    </Box>
  )
}

export default HomePage