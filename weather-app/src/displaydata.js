import React from 'react'
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

function DisplayData ({ data }) {
  const classes = useStyles()
  if (data?.request?.type === 'City') {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card raised={true} className={classes.root}>
              <CardActionArea>
                <CardContent>
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
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default DisplayData
