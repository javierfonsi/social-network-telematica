import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Loading = () => {
  return (
    <div>    
        <Box sx={{ color: 'grey.500' }} >
            <CircularProgress color="secondary" />
            {/*<CircularProgress color="inherit" />*/}
        </Box>
    </div>
  )
}

export default Loading