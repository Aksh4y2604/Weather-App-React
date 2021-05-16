import React from 'react'
import { Typography, Grid } from '@material-ui/core'

function DisplayData ({ data }) {
  if (data?.request?.type === 'City') {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} className='gridItem'>
            <Typography variant='h4'>
              {data.location.name},{data.location.country}
            </Typography>
          </Grid>

          <Grid item xs={12} className='gridItem'>
            <img src={data.current.weather_icons} className='image' />
            <Typography variant='h5' component='code'>
              {data.current.temperature}°C
            </Typography>
          </Grid>
          <Grid item xs={12} className='gridItem'>
            <Typography variant='h5' component='code'>
              {data.current.weather_descriptions}
            </Typography>
          </Grid>

          <Grid item xs={12} className='gridItem'>
            <Typography variant='h5' component='code'>
              Wind Speed:{data.current.wind_speed}
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default DisplayData
