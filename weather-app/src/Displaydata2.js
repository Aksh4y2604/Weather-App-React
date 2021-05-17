import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { CardMedia } from '@material-ui/core'
import { theme } from './theme'
import { width } from '@material-ui/system'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    width: '35vw',
    height: '25vh',
    alignContent: 'center'
  },
  media: {
    height: 140
  }
})

export default function DisplayWeather ({ background, data }) {
  const classes = useStyles()

  if (data?.request?.type === 'City') {
    return (
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography variant='h2' component='h2'>
                {data.current.temperature + '°c'}
              </Typography>
              <Typography variant='h4' color='textSecondary' component='h3'>
                {data.location.name}
              </Typography>
              <Typography variant='h5' color='textSecondary' component='h5'>
                {data.current.weather_descriptions}
              </Typography>
              <Typography variant='h5' color='textSecondary' component='h5'>
                Feels Like {data.current.feelslike + '°c'}
              </Typography>
              <Typography variant='h5' color='textSecondary' component='h5'>
                Humidity: {data.current.humidity}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    )
  } else {
    return <div></div>
  }
}
