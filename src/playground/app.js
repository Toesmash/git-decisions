class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: []
        }
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(()=>({options: options}))
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount!')
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        }
        else if (this.state.options.indexOf(option) > -1 ) {
            return 'This item already exists';
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleDeleteOptions() {
        this.setState(()=> ({ options: [] }) );
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((moznost)=>{
                return optionToRemove !== moznost
            })
        }));
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in a hands of a computer';
        

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick = {props.handlePick}
                disabled = {!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Wipe</button>
            {props.options.length === 0 && <p>Please add option</p>}
            {
                props.options.map((item) => (
                    <Option 
                        key={item}
                        optionText={item}
                        handleDeleteOption = {props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e)=>{
                    props.handleDeleteOption(props.optionText)
                }}
            >
                X
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            error: undefined
        }
    }

    onFormSubmit(e){
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.onFormSubmit}>
                    <input type='text' name='moznost'/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}



// const User = (props) => {
//     return (
//         <div>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//         </div>
//     );
// }




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));






