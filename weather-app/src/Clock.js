import React from 'react'
import Clock from 'react-digital-clock'
import { Typography } from '@material-ui/core'

function ClockComponent ({ data }) {
  var today = new Date()
  var date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

  /* if (data?.request?.type === 'City') {
    var localDatetime = String(data.current.localtime)
    var localDate = localDatetime.substr(0, 10)

    return (
      <div>
        <Typography variant='h1' component='h1'>
          <Clock timezone={data.location.timezone_id}></Clock>
        </Typography>
        <Typography variant='h4' component='h3'>
          {localDate}
        </Typography>
      </div>
    )
  } else { */
  return (
    <div>
      <Typography variant='h1' component='h1'>
        <Clock format={'hh-mm'}></Clock>
      </Typography>

      <Typography variant='h5' component='h6'>
        {date}
      </Typography>
    </div>
  )
}

export default ClockComponent
