import React from 'react';

// Example of Class Component with helper functions dynamic css and format based on state output
class Counter extends React.Component {
    state = { count: 0, tags: ['tOne', 'tTwo', 'tThree'] }

    formatCount = () => {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

    setBadgeClasses = () => {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? " badge-warning" : " badge-primary";
        return classes;
    }

    handleIncrement = (arg) => {
        this.setState({ count: this.state.count + 1 })
        console.log(arg)
    }

    // using inline functions to pass data to your event handlers is a cleaner way to handle passing data
    render() {
        return (
            <div className="m-2">
                <span className={this.setBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-small" type="button" onClick={() => this.handleIncrement({ id: 1 })}>+</button>
            </div>
        )
    }
}

export default Counter;