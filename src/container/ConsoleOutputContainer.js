import { connect } from 'react-redux'
import ConsoleOutput from '../components/ConsoleOutput'

const mapStateToProps = state => {
  return {
    console: state.console
  }
}

const ConsoleOuputContainer = connect(
  mapStateToProps
)(ConsoleOutput)

export default ConsoleOuputContainer
