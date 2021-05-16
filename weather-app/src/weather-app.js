import react, { useState } from 'react'
import {
  Typography,
  Button,
  TextField,
  Grid,
  InputBase
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import DisplayData from './displaydata'
const styles = {
  root: {
    background: 'black',
    color: 'white'
  },
  input: {
    color: 'white',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '100%'
  }
}

function WeatherApp (props) {
  const [cityName, setCityName] = useState('')
  const handleChange = e => {
    setCityName(e.target.value)
  }
  const { classes } = props

  const [data, setData] = useState({})
  const submitHandler = () => {
    console.log(cityName)

    fetch(
      `http://api.weatherstack.com/current?access_key=ed31c3b92894f1c99c5b0d4ee9beeb78&query=${cityName}`
    )
      .then(res => res.json())
      .then(result => {
        console.log(result)
        console.log(result.success)
        setData(result)
        setCityName('')
      })
  }

  return (
    <div>
      <Grid container alignItems='center' spacing={2}>
        <Grid item xs={12} className='gridItem'>
          <Typography variant='h2' component='h2'>
            Weather App
          </Typography>
        </Grid>
        <Grid item xs={12} className='gridItem'>
          <TextField
            className={classes.textField}
            autoFocus
            id='outlined-basic'
            placeholder='City'
            InputProps={{
              className: classes.input
            }}
            value={cityName}
            onChange={e => handleChange(e)}
          ></TextField>
        </Grid>
        <Grid item xs={12} className='gridItem'>
          <Button color='primary' variant='contained' onClick={submitHandler}>
            Search
          </Button>
        </Grid>
        <Grid item xs={12}>
          <DisplayData data={data}></DisplayData>
        </Grid>
      </Grid>
    </div>
  )
}
export default withStyles(styles)(WeatherApp)
