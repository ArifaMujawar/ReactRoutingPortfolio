
class IndecisionApp extends React.Component {
    constructor (props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption= this.handleAddOption.bind(this);
        this.handleDeleteOption= this.handleDeleteOption.bind(this);
        this.state ={
            options : [] //props.options
        };
    }

    componentDidMount() {
        try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
        this.setState(() => ({ options}));
            
       }
        }catch (e){
            //Do Nothing
        }
        
    }
    
    componentDidUpdate(prevProps, prevState) {
      if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options',json);
      }  
    }
    componentWillUnmount() {

    }
    handleDeleteOptions () {
        // this.setState(() => {
        //     return {
        //         options : []
        //     };
        // });
        this.setState (() => ({ options : []}));
    }
    handleDeleteOption(optionToRemove) {
       this.setState ((prevState) => ({
           options: prevState.options.filter((option) => optionToRemove !==option)
       }));
    }

    handlePick () {
      
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
            
    }
    handleAddOption (option) {
        if(!option){
            return 'Enter valid value to add item';
        }else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
    //    this.setState( (prevState) => {
    //     return {
    //         options : prevState.options.concat(option)
    //     };
    //    });
    this.setState ((prevState) => ({options : prevState.options.concat(option)}));
    }
    render () {
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action 
                hasOptions={this.state.options.length > 0 } 
                handlePick ={this.handlePick}
                />
                <Options 
                options ={this.state.options}
                handleDeleteOptions ={this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                handleAddOption = {this.handleAddOption}
                />
            </div>
        );

    }
}
// IndecisionApp.defaultProps = {
//     options : []
// }

// class Header extends React.Component {
//     render(){
//         return  (
//         <div>
//             <h1> {this.props.title} </h1>
//             <h2> {this.props.subTitle} </h2>
//         </div>
//         );
//     }
// }
//Below using stateless functional component
const Header = (props) => {
    return  (
        <div>
            <h1> {props.title} </h1>
            <h2> {props.subTitle} </h2>
        </div>
        );
}


// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button disabled ={!this.props.hasOptions}
//                  onClick ={this.props.handlePick}> What should I do? </button>    

//             </div>
//         );
//     }
// }
//Below using stateless functional component
const Action =(props) => {
    return (
        <div>
            <button disabled ={!props.hasOptions}
             onClick ={props.handlePick}> What should I do? </button>    

        </div>
    );
}
// class Options extends React.Component {
    
//     render() {
//         return (
//             <div> 
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((item) => <Option key = {item} optionText={item}/>)
//                 }              
//             </div>
//         );
//     }
// }
//Below using stateless functional component
const Options = (props) => {
    return (
        <div> 
        <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add your options</p>}
            {
                props.options.map((item) =>(
                    <Option 
                     key = {item}
                     optionText={item}
                     handleDeleteOption= {props.handleDeleteOption}
                     />
                ))
            }              
        </div>
    );
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }
//Below using stateless functional component
const Option = (props) => {
   
        return (
            <div>
                {props.optionText}
                <button 
                    onClick ={(e) => {
                        props.handleDeleteOption(props.optionText)
                    }}
                >
                    remove
                </button>
            </div>
        );
    
}
class AddOption extends React.Component {
   constructor(){
       super();
       this.handleAddOption = this.handleAddOption.bind(this);
       this.state = {
           error: undefined
       };
   }
    handleAddOption (e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
    //     this.setState(() => {
    //        return {
    //            error
    //        }
    //    });
    this.setState (() => ({error}));
    if(!error){
        e.target.elements.option.value = '';
    }
    }
    render() {
        
        return (
            <div>
            {this.state.error && <p> {this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button> Add Option </button>
        </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));