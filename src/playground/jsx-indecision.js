
console.log('App.js is running');
const app= {
    title:'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options:[]
};

const onFormSubmit = (e) => {// e contains info about event
    e.preventDefault();// prevents full page refresh, instead below code is exec

    const option = e.target.elements.option.value;
    // e.target points to element that event started on,option is value of form name attribute.

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    RenderList();
};

const onRemoveAll = () =>{
    app.options = [];
    RenderList();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const RenderList = () =>{
    const template = (
        <div> 
            <h1>{app.title} </h1>
        
            {app.subtitle && <p>{app.subtitle }</p>}
            <p>{( app.options.length >0) ? "Here are your options" : "No Options"}</p>
    
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
               {    
                   app.options.map((item) => <li key ={item}> Item: {item}</li>)
                    
               }
       
            </ol>
    
        <form onSubmit={onFormSubmit}>
        {/* onSubmit equals to funct, that handles event .Also,here we just reference function name and do not call.*/}
            <input type="text" name="option" />
            <button> Add Option </button>
        </form>
    </div>
    );
    const appRoot = document.getElementById('app');
    
    
    ReactDOM.render(template, appRoot);
};

RenderList();
