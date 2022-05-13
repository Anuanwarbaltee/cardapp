import Button from "./button";
function Card(props){
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <h2>{props.id}</h2>
            <h3>{props.price}</h3>
            <Button click = {props.action} val="Add To Card "/>
        </div>
    )
}
export default Card;