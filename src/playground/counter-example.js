class Counter extends React.Component {
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.wipe = this.wipe.bind(this);

        this.state = {
            count: 0
        };
    }

    componentDidMount(){

        console.log('ComponentDidMount')
        try {
            const number = parseInt(localStorage.getItem('num'),10);
            if ((!isNaN(number))) {
                this.setState(()=>({count: number}))
            }
        }catch(e){

        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count) {
            const number = this.state.count
            localStorage.setItem('num', number);
        }
    }



    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    minusOne() {
        this.setState((prevState)=>{
            return {
                count: prevState.count-1
            };
        });
    }
    wipe() {
        this.setState(()=>{
            return {
                count: 0
            };
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.wipe}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));




// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const subtractOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count=0;
//     renderCounterApp();
// };





// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={subtractOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();


// const user = {
//    name: 'Toesmash',
//    age: 18,
//    location: 'New Ark'
// };

// function getLocation(location) {
//    if (location) {
//       return <p>Location: {location}</p>;
//    } 
// }

// const templateTwo = (
//    <div>
//       <h1>{user.name ? user.name : 'Anonymous'}</h1>
//       {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//       {getLocation(user.location)}
//    </div>
// );