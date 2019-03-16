import { connect } from 'react-redux'
import Console from '../components/Console'

const mapStateToProps = state => {
  return {
    console: state.console
  }
}

const ConsoleContainer = connect(
  mapStateToProps
)(Console)

export default ConsoleContainer
