import { increment } from "../actions/counter";
import { CounterComponent } from "../components/Counter";
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        value: state.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            dispatch(increment(1))
        }
    }
}

export const CounterContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(CounterComponent)
