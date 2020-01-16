import React from 'react';
import Counter from './Counter';

class Counters extends React.Component {

    render() {
        return (
            <div>
                <button className="btn btn-primary btn-small m-2" onClick={this.props.onReset}>Reset</button>
                {this.props.counters.map((counter) =>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDecrement={this.props.onDecrement}
                        onIncrement={this.props.onIncrement}
                        onDelete={this.props.onDelete}>
                    </Counter>
                )}
            </div>
        )
    }
}

export default Counters;