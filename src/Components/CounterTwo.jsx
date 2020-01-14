import React from 'react';

// Example of Conditional Rendering

class Counter extends React.Component {
    state = { count: 0, tags: [] }

    renderTags() {
        if (this.state.tags.length === 0) return <p>You have {this.state.count} items</p>
        return <ul>{this.state.tags.map(item => <li key={item}>{item}</li>)}</ul>
    }
    // Neat example in render statement, JS allows 'logical And' between boolean expression. If first statement is true
    // String will allow evaluate to true. Because of coercion, string text is output as it is the last type
    render() {
        return (
            <div>
                {this.state.tags.length === 0 && "Please create a new tag"}
                <div>{this.renderTags()}</div>
            </div>
        )
    }
}

export default Counter;