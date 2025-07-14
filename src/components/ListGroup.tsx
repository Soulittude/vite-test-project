

function ListGroup() {
    let items = ['New York', "San Francisco", "Tokyo", "London", "Paris"];

    // Event handler
    const handleClick = (event: React.MouseEvent) => console.log(event)

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p> "No item found."</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className="list-group-item active" key={item} onClick={handleClick}>{item} {index}</li>
                ))}
            </ul>
        </>
    );
}
export default ListGroup;
