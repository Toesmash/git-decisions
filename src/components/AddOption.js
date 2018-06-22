import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    // constructor(props) {
    //     super(props);
    //     this.onFormSubmit = this.onFormSubmit.bind(this);

    //     // this.state = {
    //     //     error: undefined
    //     // }
    // }

    onFormSubmit = (e) => {
        e.preventDefault();
        const option = e.target.elements.moznost.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(()=> ({error: error}));

        if (!error) {
            e.target.elements.moznost.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className='add-option' onSubmit = {this.onFormSubmit}>
                    <input className='add-option__input' type='text' name='moznost'/>
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}