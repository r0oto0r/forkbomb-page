import React from 'react'
import PropTypes from 'prop-types'
import { Container, Item } from 'semantic-ui-react'
import ConsoleLinePrefix from './ConsoleLinePrefix'

const consoleOutputLineStyle = {
  color: 'white'
}

const ConsoleOutput = ({ console }) => (
  <div>
    <Container fluid>
    {console.out.lines.map((line) => (
      <Item key={line.nr.toString()} style={consoleOutputLineStyle}>
        <Item.Content>
          <ConsoleLinePrefix />
          {line.content}
        </Item.Content>
      </Item>
    ))}
    </Container>
  </div>
)

ConsoleOutput.propTypes = {
  console: PropTypes.shape({
    out: PropTypes.shape({
      lines: PropTypes.arrayOf(
        PropTypes.shape({
          nr: PropTypes.number.isRequired,
          content: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  }).isRequired
}

export default ConsoleOutput
