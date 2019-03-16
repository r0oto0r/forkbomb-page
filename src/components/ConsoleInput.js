import React, { Fragment } from 'react'
import ConsoleLinePrefix from './ConsoleLinePrefix'

const consoleInputStyle = {
  backgroundColor: 'transparent',
  color: 'white'
}

const ConsoleInput = () => (
  <Fragment className="consoleInput">
    <ConsoleLinePrefix />
    <input type="text" style={consoleInputStyle} name="name" />
  </Fragment>
)

export default ConsoleInput
