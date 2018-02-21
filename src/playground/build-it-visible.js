
let visibility =false;

const toggleContent = () => {
    visibility = !visibility;
    renderFunc();
};


const renderFunc = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleContent}>
                {visibility ? 'Hide Details' : 'Show Details' }
             </button>
             {visibility && (
                 <div>
                    <p>Hey ! these are some details! </p>
                 </div>
             )}
    </div>
    );
    
    const appRoot = document.getElementById('app');
    
    
    ReactDOM.render(template, appRoot);
};
renderFunc();