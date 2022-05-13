function Button(props){
    return(
     <button onClick={props.click}>{props.val}</button>
    )
}
export default Button;