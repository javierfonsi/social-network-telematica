import React from 'react'
//import { useNavigate } from 'react-router-dom'
import './CardAds.css'
//import Fab from '@mui/material/Fab';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
//import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
//import BiotechSharpIcon from '@mui/icons-material/BiotechSharp';
//import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';

const CardAds = ({ad}) => {

  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        //image="/static/images/cards/contemplative-reptile.jpg"
        image={`${ad?.img_Url}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {ad?.product }
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {ad?.description }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default CardAds