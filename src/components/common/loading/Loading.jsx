import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Loading = () => {
  return (
    <div>    
        {/*<Box sx={{ color: 'grey.500' }} >*/}
        <Box sx={{display:'flex', margin: '0-auto' }}>
            <CircularProgress/>
        </Box>
    </div>
  )
}

export default Loading