import { connect } from 'react-redux'

import { plus, minus, set } from '../actions'
import Editor from '../components/Editor/Editor.jsx'

const mapStateToProps = state => {
  return {
    number: state.numbers.number
  }
}

const mapDispatchToProps = dispatch => {
  return {
    plus: amount => {
      dispatch(plus(amount))
    },
    minus: amount => {
      dispatch(minus(amount))
    },
    set: amount => {
      dispatch(set(amount))
    }
  }
}

const EditorConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)

export default EditorConnect