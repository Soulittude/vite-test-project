

function ListGroup() {

    let items = ['New York', "San Francisco", "Tokyo", "London", "Paris"];

    let selectedIndex = 0;
    // Event handler
    const handleClick = (event: React.MouseEvent) => console.log(event)

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p> "No item found."</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} onClick={handleClick}>{item} {index}</li>
                ))}
            </ul>
        </>
    );
}
export default ListGroup;
