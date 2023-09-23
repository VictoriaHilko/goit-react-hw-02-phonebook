import { nanoid } from 'nanoid';
import { Component } from 'react';

export class ContactForm extends Component {

    state = {
        id: '',
        name: '',
        number: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit({ ...this.state });

        this.setState({
            id: '',
            name: '',
            number: ''
        });
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value,
            id: nanoid()
        });
    };

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>New contact name: </label>
                <input type="text"
                    name="name"
                    value={name}
                    required
                    onChange={this.handleChange} />
                <input type="tel"
                    name="number"
                    value={number}
                    required
                    onChange={this.handleChange} />
                <button>Save contact</button>
            </form>
        );
    };
}