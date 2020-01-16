import React from 'react';

// Example of Class Component with helper functions dynamic css and format based on state output
class Counter extends React.Component {
    // using inline functions to pass data to your event handlers is a cleaner way to handle passing data
    // example of raising events with delete button onDelete function passed via props. The component that owns a peice of the state, should be the modifying it
    render() {
        return (
            <div className="m-2">
                <span className={this.setBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-small m-2" onClick={() => this.props.onIncrement(this.props.counter)}>+</button>
                <button className="btn btn-secondary btn-small m-2" onClick={() => this.props.onDecrement(this.props.counter)}>-</button>
                <button className="btn btn-danger btn-small" onClick={() => this.props.onDelete(this.props.counter)}>Delete</button>
            </div>
        )
    }
    setBadgeClasses = () => {
        let classes = "badge m-2 ";
        classes += this.props.counter.value === 0 ? " badge-warning" : " badge-primary";
        return classes;
    };

    formatCount = () => {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    };
}

export default Counter;