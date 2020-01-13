import React from 'react';

class Counter extends React.Component {
    state = { count: 0, tags: ['tOne', 'tTwo', 'tThree'] }

    handleCount = () => {

    }

    formatCount = () => {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

    setBadgeClasses = () => {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? " badge-warning" : " badge-primary";
        return classes;
    }

    render() {
        return (
            <div className="m-2">
                <span className={this.setBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-small" type="button" onClick={this.handleCount}>+</button>
                <ul>
                    {this.state.tags.map(item =>
                        <li key={item}>{item}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Counter;