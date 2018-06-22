console.log('App.js is running');


// JSX - JavaScript XML

const appObject = {
    title: 'This is a TITLE',
    subtitle: 'Subtitle',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        appObject.options.push(option);
        e.target.elements.option.value = '';
        renderFunction();
    }
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObject.options.length);
    const option = appObject.options[randomNum];
    alert(option);
};

const wipe = () => {
    appObject.options = [];
    renderFunction();
};


const appRoot = document.getElementById('app');


const renderFunction = () => {
    const template = (
        <div>
            <h1>{appObject.title}</h1>
            {(appObject.subtitle && <p>{appObject.subtitle}</p>)}
            {appObject.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}

            <button disabled={appObject.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={wipe}>Wipe</button>
            <ol>
                {
                    appObject.options.map((list) => {
                        return <li key={list}>{list}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderFunction();
