import React from 'react';
import NavBar from './NavBar';
import Counters from './Counters';

class App extends React.Component {
    state = { counters: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }] }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({ counters })
    }

    handleIncrement = (counter) => {
        //here we clone state
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index].value++
        this.setState({ counters })
    }

    handleDecrement = (counter) => {
        //here we clone state
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        if (counters[index].value > 0) {
            counters[index].value--
            this.setState({ counters })
        }
    }

    //onDelete passes a reference to the handleDelete function to the child component
    handleDelete = (counter) => {
        console.log(counter)
        const counters = this.state.counters.filter(c => c.id !== counter.id)
        this.setState({ counters: counters })
    }

    render() {
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}></NavBar>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}>
                    </Counters>
                </main>
            </React.Fragment>
        )
    }
}

export default App;