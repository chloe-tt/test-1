import React from 'react';
import { connect } from 'react-redux';
import state from '../state.json';


const CounterContainer = ({ count, dispatch }) => {
    return(
        <div className="CounterContainer">
            <div className="ContainerTitle">
                <h1>A counter with Redux</h1>
            </div>
            <p>{count}</p>
            <div className="ContainerActions">
                <button
                    onClick={() => dispatch(state.add1Action)}
                >
                    + 1
                </button>
                <button
                    onClick={() => dispatch(state.add10Action)}
                >
                    + 10
                </button>
                <button
                    onClick={() => dispatch(state.remove1Action)}
                >
                    - 1
                </button>
                <button
                    onClick={() => dispatch(state.remove10Action)}
                >
                    - 10
                </button>
            </div>
            
            <button
                onClick={() => dispatch(state.resetAction)}
            >
                Reset
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    count: state
});

export default connect(mapStateToProps)(CounterContainer);