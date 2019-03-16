import React from 'react'
import ConsoleOutputContainer from '../container/ConsoleOutputContainer'
import ConsoleInput from './ConsoleInput'

const consoleStyle = {
  backgroundColor: 'black',
  height: '100vh',
  width: '100vw',
  fontFamily: 'Courier New, Times, serif',
  fontWeight: 'bold',
  fontSize: '12pt'
}

const Console = () => (
  <div style={consoleStyle}>
    <ConsoleOutputContainer />
    <ConsoleInput />
  </div>
)

export default Console
