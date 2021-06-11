import react, { useState } from 'react'
/* MATERIAL-UI IMPORTS */
import {
  Typography,
  Grid,
  InputBase,
  AppBar,
  Toolbar,
  IconButton,
  ThemeProvider,
  Card,
  CardActionArea,
  CardContent
} from '@material-ui/core'

/* MATERIAL UI ICON IMPORTS */
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

/* MATERIAL UI SYLE IMPORTS  */
import { makeStyles, fade, createMuiTheme } from '@material-ui/core/styles'
/* COMPONENT IMPORTS  */
import DisplayData from './displaydata'
import ClockComponent from './Clock'

import DisplayWeather from './Displaydata2'
import { theme } from './theme'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {},
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}))

const cardStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
    width: '40vw',
    height: '25vh',
    alignContent: 'center'
  },
  media: {
    height: 140
  }
}))

function WeatherApp () {
  const classes = useStyles()
  const cardClass = cardStyles()

  const [cityName, setCityName] = useState('')
  const handleChange = e => {
    setCityName(e.target.value)
  }
  var today = new Date()
  var date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  var time = today.getHours() + ':' + today.getMinutes()

  const [data, setData] = useState({})
  const submitHandler = e => {
    e.preventDefault()

    console.log(cityName)

    fetch(
      `https://api.weatherstack.com/current?access_key=ed31c3b92894f1c99c5b0d4ee9beeb78&query=${cityName}`
    )
      .then(res => res.json())
      .then(result => {
        console.log(result)
        console.log(result.success)
        setData(result)
        setCityName('')
      })
    return false
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* APP BAR */}
        <div className={classes.root}>
          <AppBar position='static'>
            <Toolbar>
              <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='open drawer'
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant='h6' noWrap>
                Weather App
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <form onSubmit={e => submitHandler(e)}>
                  <InputBase
                    placeholder='Search…'
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    value={cityName}
                    onChange={e => handleChange(e)}
                  />
                </form>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        {/* CLOCK COMPONENT */}
        <div className='hero-container'>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} className='gridItem2'>
              <ClockComponent data={data}></ClockComponent>
            </Grid>
            {/* WEATHER DISPLAY COMPONENT */}

            <Grid item xs={12} sm={6} className='gridItem2'>
              <DisplayWeather data={data}></DisplayWeather>
            </Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  )
}
export default WeatherApp
