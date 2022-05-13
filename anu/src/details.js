function Details(props){
    return (
        <div className="Details">
            <h3>{props.title}</h3>
            <h2>{props.id}</h2>
            <h3>{props.price}</h3>
        </div>
    )
}
export default Details;