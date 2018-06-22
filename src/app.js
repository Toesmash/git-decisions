import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));


// const Layout = (props) => {
//     return (
//         <div>
//             <p>Header</p>
//             {props.children}
//             <p>Footer</p>
//         </div>
//     )
// }


// ReactDOM.render((
//     <Layout>
//         <div>
//             <h1>title</h1>
//             <p>This is my page</p>
//         </div>
//     </Layout>
// ), document.getElementById('app'));





// class OldSyntax {
//     constructor() {
//         this.name = 'Mike'
//     }

//     getGreeting () {
//         return `Hi. My name is ${this.name}`;
//     }
// }

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax.getGreeting())


// // -----------

// class NewSyntax {
//     name = 'jen';
//     getGreeting = () => {
//         return `Hi. My name is ${this.name}`;
//     }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());


