import { connect } from 'react-redux'
import Home from '../components/Home/Home.jsx'

const mapStateToProps = state => {
  return {
    number: state.numbers.number
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const HomeConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeConnect