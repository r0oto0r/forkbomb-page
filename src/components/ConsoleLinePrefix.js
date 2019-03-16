import React from 'react'

const consoleLinePrefixStyle = {
  color: 'green'
}

const consoleLinePrefixLocatorStyle = {
  color: 'lightblue'
}

const ConsoleLinePrefix = () => (
  <span style={consoleLinePrefixStyle}>visitor@forkbomb.dev <span style={consoleLinePrefixLocatorStyle}>/home/visitor $</span> </span>

)

export default ConsoleLinePrefix
