class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this);

        this.state = {
            visibility: false,
            title: 'Visibility Title'

        }

    }
    handleToggleVisiblity() {
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            };
            
        });
    }
    render(){
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggleVisiblity}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Some details</p>
                    </div>
                )}
            </div>
        );
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const app = {
//     title: 'Visibility Toggle',
// }

// let toggle = false;

// const onToggle = () => {
//     toggle = !toggle;
//     render();
// };



// const mainApp = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={onToggle}>{toggle ? 'Hide details' : 'Show details'}</button>
//             {toggle && (
//                 <p>Hey. Some details pls!</p>
//             )}
//         </div>
//     );

//     ReactDOM.render(template,mainApp);
// };

// render();