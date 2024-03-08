import { Component } from "react";

class ClassComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"React"
        }

        console.log("constructor called");
    }

    componentDidMount(){
        console.log("in Componetn did mount");
    }

    componentDidUpdate(){
        console.log("in component did update");
    }

    componentWillUnmount(){
        console.log("in componetn will unmmount");
    }

    shouldComponentUpdate(){
        return true
    }

    handleInputField(e){
        this.setState({name:e.target.value})
    }

    render(){
        return(
            <>
            <div>Hi</div>
            <div>{this.state.name}</div>
            
            <input onChange={(e)=> this.setState({name:e.target.value})} value={this.state.name}></input>
            </>
        )
    }

}

export default ClassComponent;


// const FunctionalComponent = (props)=>{

//     const [name,setName] = useState("React")
//     return(
//         <>HI
//         <div>{name}</div>
//         <input onChange={(e)=>e.target.value} value={name}></input>

//         </>
//     )
// }