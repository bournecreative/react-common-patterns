import React from 'react';
import Counter from './Counter';

class Counters extends React.Component {

    state = { counters: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }] }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({ counters })
    }

    handleIncrement = (counter) => {
        console.log(counter)
        //here we clone state
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index].value++
        this.setState({ counters })
    }

    //onDelete passes a reference to the handleDelete function to the child component
    handleDelete = (counter) => {
        console.log(counter)
        const counters = this.state.counters.filter(c => c.id !== counter.id)
        this.setState({ counters: counters })
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary btn-small m-2" onClick={this.handleReset}>Reset</button>
                {this.state.counters.map((counter) =>
                    <Counter key={counter.id} counter={counter} onIncrement={this.handleIncrement} onDelete={this.handleDelete}>
                    </Counter>
                )}
            </div>
        )
    }
}

export default Counters;