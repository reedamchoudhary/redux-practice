import React from 'react'
import {connect} from "react-redux";
import {addTodo} from "../../actions"

const AddTodo = (props) =>{
    console.log(props)
    return (
    <form onSubmit={(event)=>{
        event.preventDefault()
        let input = event.target.userInput.value;
        console.log(event)
        
        props.dispatch(addTodo(input))
        event.target.userInput.value = "";
        console.log(input)
    }}>
        <input type='text' name='userInput' />
        <button>Submit</button>
    </form>
    )


};

export default connect()(AddTodo)